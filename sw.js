/* Swedish Studies offline cache: network first, cache as backup. */
const CACHE='svenska-v10';
const CORE=['daily.html','arena.html','index.html','reader.html','app.html','resurser.html','ordbank.html','grammatik.html','lessons.js','reader-data.js','reader-bank.js','manifest.webmanifest','favicon.svg','favicon.ico','favicon-32.png','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>null)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const c=n.clone();caches.open(CACHE).then(ca=>ca.put(e.request,c));return n})));return}
  if(u.origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const c=r.clone();caches.open(CACHE).then(ca=>ca.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('daily.html'))))});
