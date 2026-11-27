/* Ragnars skatt cloud sync: sign in with Google, keep progress the same on every device.
   Syncs every localStorage key that starts with "swedish" (all profiles, words, missions, reader texts)
   to Firestore under users/{uid}/kv/{key}. Audiobook files (IndexedDB) stay on the device.
   Loaded as a classic script in <head>, before the page's own scripts, so it can note what this
   device had saved before the page started (see START). Does nothing until firebase-config.js is filled in. */
(function () {
  'use strict';
  var CFG = window.FIREBASE_CONFIG, FAKE = window.__SYNC_FAKE;
  if (!CFG && !FAKE) return;

  var META = 'swedish-sync-v1', PREFIX = 'swedish', MAX = 900000, SDK = '10.12.2';
  var PULL_EVERY = 60000, PUSH_EVERY = 20000;

  function ls(fn) { try { return fn(); } catch (e) { return null; } }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return s.length + ':' + (h >>> 0).toString(36); }
  function localMap() {
    var o = {};
    ls(function () { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf(PREFIX) === 0 && k !== META) o[k] = localStorage.getItem(k); } });
    return o;
  }
  function readMeta() { var m = ls(function () { return JSON.parse(localStorage.getItem(META)); }); return m && typeof m === 'object' ? m : { uid: null, lastPull: 0, hashes: {} }; }
  function saveMeta() { ls(function () { localStorage.setItem(META, JSON.stringify(meta)); }); }

  /* What this device had saved before this page's scripts ran (they may rewrite keys on load). */
  var START = {};
  (function () { var m = localMap(); for (var k in m) START[k] = hash(m[k]); })();

  var meta = readMeta(), user = null, backend = null, busy = false, lastSync = 0, state = 'off', pending = null, warnedBig = {};

  /* ---------- backend: Firebase (or a test fake with the same shape) ---------- */
  function firebaseBackend() {
    var base = 'https://www.gstatic.com/firebasejs/' + SDK + '/';
    return Promise.all([import(base + 'firebase-app.js'), import(base + 'firebase-auth.js'), import(base + 'firebase-firestore.js')]).then(function (m) {
      var A = m[0], U = m[1], F = m[2];
      var app = A.initializeApp(CFG), auth = U.getAuth(app), db = F.getFirestore(app);
      var kv = function (uid) { return F.collection(db, 'users', uid, 'kv'); };
      var id = function (k) { return encodeURIComponent(k); };
      var ms = function (t) { return t && t.toMillis ? t.toMillis() : 0; };
      return {
        onAuth: function (cb) { U.onAuthStateChanged(auth, function (u) { cb(u ? { uid: u.uid, email: u.email, name: u.displayName } : null); }); },
        signIn: function () { var p = new U.GoogleAuthProvider(); p.setCustomParameters({ prompt: 'select_account' }); return U.signInWithPopup(auth, p); },
        signOut: function () { return U.signOut(auth); },
        remoteUpdated: function (uid) { return F.getDoc(F.doc(db, 'users', uid)).then(function (s) { return s.exists() ? ms(s.data().updated) : 0; }); },
        changedSince: function (uid, since) {
          var q = since ? F.query(kv(uid), F.where('t', '>', F.Timestamp.fromMillis(since))) : kv(uid);
          return F.getDocs(q).then(function (r) { return r.docs.map(function (d) { var x = d.data(); return { key: x.k, v: x.v, del: !!x.del, t: ms(x.t) }; }); });
        },
        push: function (uid, email, sets, dels) {
          var ops = [];
          sets.forEach(function (s) { ops.push([F.doc(kv(uid), id(s.key)), { k: s.key, v: s.v, del: false, t: F.serverTimestamp() }]); });
          dels.forEach(function (k) { ops.push([F.doc(kv(uid), id(k)), { k: k, v: null, del: true, t: F.serverTimestamp() }]); });
          var chunks = [];
          for (var i = 0; i < ops.length; i += 450) chunks.push(ops.slice(i, i + 450));
          return chunks.reduce(function (p, ch, n) {
            return p.then(function () {
              var b = F.writeBatch(db);
              ch.forEach(function (o) { b.set(o[0], o[1]); });
              if (n === chunks.length - 1) b.set(F.doc(db, 'users', uid), { updated: F.serverTimestamp(), email: email || '' }, { merge: true });
              return b.commit();
            });
          }, Promise.resolve());
        }
      };
    });
  }

  /* ---------- pull: bring in changes from other devices ---------- */
  // atStart: compare against what was saved before this page loaded, so the page's own
  // start-up writes never block newer progress from another device.
  // checkOnly: count what would change (for the "new progress" banner) without touching storage.
  function pull(atStart, checkOnly) {
    var uid = user.uid;
    return backend.changedSince(uid, meta.lastPull || 0).then(function (rows) {
      var applied = 0, maxT = meta.lastPull || 0;
      rows.forEach(function (r) {
        if (!r.key || r.key === META || r.key.indexOf(PREFIX) !== 0) return;
        if (r.t > maxT) maxT = r.t;
        var cur = ls(function () { return localStorage.getItem(r.key); });
        var was = atStart ? (r.key in START ? START[r.key] : null) : (cur == null ? null : hash(cur));
        var synced = meta.hashes[r.key] == null ? null : meta.hashes[r.key];
        if (was !== synced) return; // this device changed it and hasn't uploaded yet: this device wins
        if (checkOnly) { if (r.del ? cur != null : cur !== r.v) applied++; return; }
        if (r.del) {
          if (cur != null) { ls(function () { localStorage.removeItem(r.key); }); applied++; }
          delete meta.hashes[r.key];
        } else if (typeof r.v === 'string') {
          if (cur !== r.v) { if (ls(function () { localStorage.setItem(r.key, r.v); return 1; })) applied++; }
          meta.hashes[r.key] = hash(r.v);
        }
      });
      if (checkOnly && applied) return applied; // keep lastPull so "Refresh" can still fetch these
      meta.lastPull = maxT; saveMeta();
      return applied;
    });
  }

  /* ---------- push: upload what changed on this device ---------- */
  function push() {
    if (!user || meta.uid !== user.uid || busy) return Promise.resolve(0);
    var now = localMap(), sets = [], dels = [];
    Object.keys(now).forEach(function (k) {
      var v = now[k];
      if (v.length > MAX) { if (!warnedBig[k]) { warnedBig[k] = 1; toast('“' + k + '” is too big to sync (' + Math.round(v.length / 1024) + ' KB). It stays on this device.'); } return; }
      var h = hash(v); if (meta.hashes[k] !== h) sets.push({ key: k, v: v, h: h });
    });
    Object.keys(meta.hashes).forEach(function (k) { if (!(k in now)) dels.push(k); });
    if (!sets.length && !dels.length) { lastSync = Date.now(); return Promise.resolve(0); }
    busy = true; setState('busy');
    return backend.push(user.uid, user.email, sets, dels).then(function () {
      sets.forEach(function (s) { meta.hashes[s.key] = s.h; });
      dels.forEach(function (k) { delete meta.hashes[k]; });
      saveMeta(); busy = false; lastSync = Date.now(); setState('on');
      return sets.length + dels.length;
    }, function (e) { busy = false; fail(e); return 0; });
  }

  function fail(e) {
    console.warn('[sync]', e);
    setState('error');
    var code = e && (e.code || e.message) || '';
    if (/permission/i.test(code)) toast('Cloud sync: this Google account is not allowed. Ask the person who set up the site.');
  }

  /* ---------- first sign-in on this device ---------- */
  function link() {
    var uid = user.uid, local = localMap(), hasLocal = Object.keys(local).length > 0;
    return backend.remoteUpdated(uid).then(function (remoteAt) {
      var fresh = { uid: uid, lastPull: 0, hashes: {} };
      if (!remoteAt) { meta = fresh; saveMeta(); return push().then(function () { toast('☁️ Progress saved to your Google account.'); }); }
      if (!hasLocal) { meta = fresh; saveMeta(); START = {}; return pull(true).then(reloadOnce); }
      return choose().then(function (useCloud) {
        meta = fresh; saveMeta();
        if (useCloud) {
          Object.keys(local).forEach(function (k) { ls(function () { localStorage.removeItem(k); }); });
          START = {};
          return pull(true).then(function () { reloadOnce(1); });
        }
        // Keep this device: upload everything, remove cloud keys this device doesn't have.
        return backend.changedSince(uid, 0).then(function (rows) {
          rows.forEach(function (r) { if (!r.del && !(r.key in local)) meta.hashes[r.key] = 'remote'; if (r.t > meta.lastPull) meta.lastPull = r.t; });
          saveMeta(); return push();
        }).then(function () { toast('☁️ This device’s progress is now in the cloud.'); });
      });
    });
  }

  function reloadOnce(n) {
    if (!n) return;
    var k = 'swedish-sync-reload', last = Number(ls(function () { return sessionStorage.getItem(k); }) || 0);
    if (Date.now() - last < 15000) return;
    ls(function () { sessionStorage.setItem(k, String(Date.now())); });
    location.reload();
  }

  function start() {
    setState('busy');
    var p = meta.uid !== user.uid ? link() : pull(true).then(function (n) { if (n) { reloadOnce(n); return; } return push(); });
    return p.then(function () { if (state === 'busy') setState('on'); lastSync = Date.now(); }, fail);
  }

  function checkRemote() {
    if (!user || meta.uid !== user.uid || busy) return;
    push().then(function () {
      return backend.remoteUpdated(user.uid).then(function (at) {
        if (!at || at <= (meta.lastPull || 0)) return;
        return pull(false, true).then(function (n) { if (n) banner(); });
      });
    }).catch(fail);
  }

  /* ---------- UI ---------- */
  var dlg = null, ban = null;
  function css() {
    var s = document.createElement('style');
    s.textContent = '.syncrow{display:grid;gap:6px;margin-top:4px;padding-top:10px;border-top:1px solid #e3e6dc;font-size:14px;line-height:1.35}' +
      '.profpop .syncrow button{justify-content:center}' +
      '.profpop .syncrow button.primary{background:var(--accent,#ee4d1f);border-color:var(--accent,#ee4d1f);color:#fff}' +
      '.synccard{display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin:18px 0 22px;padding:14px 16px;border:1.5px dashed var(--line,#c8cec3);border-radius:14px;background:var(--card,#fff);max-width:640px;line-height:1.45}' +
      '.synccard button{font:inherit;border-radius:10px;padding:9px 14px;cursor:pointer;border:1.5px solid var(--line,#c8cec3);background:var(--card,#fff);color:inherit;white-space:nowrap}' +
      '.synccard button.primary{background:var(--accent,#ee4d1f);border-color:var(--accent,#ee4d1f);color:#fff;font-weight:600}' +
      '.syncdlg{border:1.5px solid var(--line,#c8cec3);border-radius:16px;padding:20px 22px;max-width:360px;background:var(--card,#fff);color:var(--ink,#161412)}' +
      '.syncdlg::backdrop{background:rgba(0,0,0,.35)}.syncdlg h2{margin:0 0 8px;font-size:22px}.syncdlg p{margin:6px 0 14px;line-height:1.45}' +
      '.syncdlg .row{display:flex;gap:8px;flex-wrap:wrap}.syncdlg button{font:inherit;border-radius:10px;padding:9px 14px;cursor:pointer;border:1.5px solid var(--line,#c8cec3);background:var(--card,#fff);color:inherit}' +
      '.syncdlg button.primary{background:var(--accent,#ee4d1f);border-color:var(--accent,#ee4d1f);color:#fff}' +
      '.syncban{position:fixed;left:50%;bottom:calc(80px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:#203536;color:#fff;padding:10px 12px 10px 16px;border-radius:12px;z-index:70;display:flex;gap:10px;align-items:center;max-width:92vw;box-shadow:0 8px 20px -8px rgba(0,0,0,.5)}' +
      '.syncban button{font:inherit;border:0;border-radius:8px;padding:6px 10px;cursor:pointer}';
    document.head.appendChild(s);
  }
  /* Sign-in lives in "Vem är du?" only: the card on the Idag picker screen, and a row in the
     "Vem tränar?" profile popup that the 👤 chip opens on every page. */
  var boxes = [];
  function fillBox(el, compact) {
    el.replaceChildren();
    var t = document.createElement('div'), b = document.createElement('button');
    b.type = 'button';
    b.onclick = function () { var pop = el.closest('.profpop'); if (pop) pop.remove(); menu(); };
    var mail = user ? String(user.email).replace(/[<>&]/g, '') : '';
    if (!user) {
      t.innerHTML = compact ? '<b>☁️ Spara i molnet</b><br>Keep progress on every device.'
        : '<b>☁️ Practising on another device too?</b><br>Sign in with Google to bring your profiles, words and streak here — and keep them safe.';
      b.textContent = state === 'busy' ? 'Signing in …' : 'Sign in with Google'; b.className = 'primary';
    } else {
      t.innerHTML = '<b>☁️ ' + (state === 'busy' ? 'Syncing …' : state === 'error' ? 'Sync problem' : 'Synced') + '</b><br>' + mail +
        (state === 'error' ? ' — check your internet connection.' : compact ? '' : ' · every profile on this device is saved to your Google account.');
      b.textContent = 'Account';
    }
    el.append(t, b);
  }
  function setState(s) {
    state = s;
    boxes = boxes.filter(function (x) { return x[0].isConnected; });
    boxes.forEach(function (x) { fillBox(x[0], x[1]); });
  }
  function addBox(el, compact) { boxes.push([el, compact]); fillBox(el, compact); }
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'syncban'; t.textContent = msg; document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 4200);
  }
  function banner() {
    if (ban) return;
    ban = document.createElement('div'); ban.className = 'syncban';
    var b = document.createElement('button'); b.textContent = 'Refresh';
    b.onclick = function () { ban.remove(); ban = null; pull(false).then(function () { location.reload(); }, fail); };
    var x = document.createElement('button'); x.textContent = '✕'; x.setAttribute('aria-label', 'Later');
    x.onclick = function () { ban.remove(); ban = null; };
    ban.append('☁️ New progress from your other device.', b, x); document.body.appendChild(ban);
  }
  function dialog(title, text, buttons) {
    if (dlg) dlg.remove();
    dlg = document.createElement('dialog'); dlg.className = 'syncdlg';
    var h = document.createElement('h2'); h.textContent = title;
    var p = document.createElement('p'); p.textContent = text;
    var r = document.createElement('div'); r.className = 'row';
    buttons.forEach(function (b) { var e = document.createElement('button'); e.textContent = b[0]; if (b[2]) e.className = 'primary'; e.onclick = function () { dlg.close(); b[1](); }; r.appendChild(e); });
    dlg.append(h, p, r); document.body.appendChild(dlg); dlg.showModal();
  }
  function choose() {
    return new Promise(function (res) {
      dialog('Which progress should we keep?',
        'Your Google account already has saved progress, and this device has progress too. Pick one — the other will be replaced.',
        [['☁️ Use the cloud progress', function () { res(true); }, true], ['📱 Keep this device’s progress', function () { res(false); }]]);
    });
  }
  function menu() {
    if (!user) { setState('busy'); backend.signIn().catch(function (e) { setState('off'); if (!/popup-closed|cancelled/.test(e && e.code || '')) toast('Sign-in did not work: ' + (e && e.code || e)); }); return; }
    var when = lastSync ? new Date(lastSync).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' }) : '—';
    dialog('☁️ ' + (user.name || user.email),
      'Signed in as ' + user.email + '. Progress for every profile on this device is saved to your Google account. Last sync: ' + when + (state === 'error' ? '. ⚠ The last sync failed — check your internet connection.' : '.'),
      [['Sync now', function () { setState('busy'); pull(false).then(function (n) { return push().then(function () { if (n) location.reload(); else { setState('on'); toast('☁️ Up to date.'); } }); }, fail); }, true],
       ['Sign out', function () { push().then(function () { return backend.signOut(); }).then(function () { toast('Signed out. Progress stays on this device.'); }); }],
       ['Close', function () {}]]);
  }
  function mount() {
    css();
    var list = document.getElementById('proflist');
    if (list) { var card = document.createElement('div'); card.className = 'synccard'; list.parentNode.insertBefore(card, list); addBox(card, false); }
    // The shared profile helper builds the "Vem tränar?" popup on demand: add the sign-in row when it opens.
    new MutationObserver(function (ms) {
      ms.forEach(function (m) { m.addedNodes.forEach(function (n) {
        var c = n.nodeType === 1 && n.classList.contains('profpop') && n.querySelector('.card');
        if (c) { var row = document.createElement('div'); row.className = 'syncrow'; c.appendChild(row); addBox(row, true); }
      }); });
    }).observe(document.body, { childList: true });
  }

  /* ---------- go ---------- */
  var ready = new Promise(function (r) { if (document.readyState !== 'loading') r(); else document.addEventListener('DOMContentLoaded', r); });
  ready.then(mount);
  Promise.resolve(FAKE || firebaseBackend()).then(function (b) {
    backend = b;
    b.onAuth(function (u) {
      var allow = (window.SYNC_ALLOWED_EMAILS || []).map(function (e) { return String(e).toLowerCase(); });
      if (u && allow.length && allow.indexOf(String(u.email).toLowerCase()) < 0) {
        b.signOut(); user = null; setState('off');
        ready.then(function () { dialog('Not allowed', u.email + ' is not on this site’s list of accounts. Sign in with one of the family’s Gmail accounts.', [['OK', function () {}, true]]); });
        return;
      }
      user = u; if (!u) { setState('off'); return; }
      ready.then(start);
    });
    setInterval(function () { if (user && meta.uid === user.uid && document.visibilityState === 'visible') push(); }, PUSH_EVERY);
    setInterval(function () { if (document.visibilityState === 'visible') checkRemote(); }, PULL_EVERY);
    document.addEventListener('visibilitychange', function () { if (!user) return; if (document.visibilityState === 'hidden') push(); else checkRemote(); });
    window.addEventListener('pagehide', function () { if (user) push(); });
  }, function (e) { console.warn('[sync] could not load Firebase', e); setState('error'); });
})();
