/* Firebase settings for cloud sync.
   1. Paste the firebaseConfig object from the Firebase console
      (Project settings → Your apps → Web app → SDK setup and configuration).
      These values are not secret: the Firestore rules decide who may read data.
   2. List the Gmail addresses that may sign in. Use the same list in firestore.rules.
   While FIREBASE_CONFIG is null the site works exactly as before, without sign-in.

   ADDING A PERSON (no account needs creating; Google sign-in creates it on first login):
   a. Add their Gmail address to SYNC_ALLOWED_EMAILS below, then commit and push.
   b. Firebase console → Firestore → Rules: add the same address to the list and click Publish.
      Keep firestore.rules in this repo the same as what is published.
   REMOVING A PERSON: take the address out of both places. Their saved progress is under
   Firestore → Data → users → (their id) if you want to delete it too. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCzl7Im3X4oC98-lIxeXFqUL2fsSeE_tGU",
  authDomain: "swedish-studies.firebaseapp.com",
  projectId: "swedish-studies",
  storageBucket: "swedish-studies.firebasestorage.app",
  messagingSenderId: "641352543149",
  appId: "1:641352543149:web:25420a05e23a5fddbecf24"
};
window.SYNC_ALLOWED_EMAILS = [
  "semramacar@gmail.com",
  "mcahmetcinar@gmail.com"
];
