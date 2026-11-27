/* Firebase settings for cloud sync.
   Paste the firebaseConfig object from the Firebase console
   (Project settings → Your apps → Web app → SDK setup and configuration).
   These values are not secret: the Firestore rules decide who may read data.
   While FIREBASE_CONFIG is null the site works exactly as before, without sign-in.

   WHO MAY SIGN IN is kept in Firestore, not in this repo, so no email address is public:
   ADDING A PERSON (Google sign-in creates their account on first login):
     Firebase console → Firestore → Data → collection "allowed" → Add document.
     Document ID = their Gmail address in lower case (e.g. name@gmail.com). No fields needed.
   REMOVING A PERSON: delete that document. Their saved progress is under
     Firestore → Data → users → (their id) if you want to delete it too.
   The rules that check this list are in firestore.rules. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCzl7Im3X4oC98-lIxeXFqUL2fsSeE_tGU",
  authDomain: "swedish-studies.firebaseapp.com",
  projectId: "swedish-studies",
  storageBucket: "swedish-studies.firebasestorage.app",
  messagingSenderId: "641352543149",
  appId: "1:641352543149:web:25420a05e23a5fddbecf24"
};
