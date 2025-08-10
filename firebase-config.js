// Firebase client config keys are public (they identify the project, not secure resources).
// Do NOT put real secrets (passwords, admin keys) in this file – all client code is visible.
const firebaseConfig = {
  apiKey: "AIzaSyAcUTnr5ITpqq8Ii1cdcsyVNQQJ_HUSPoI",
  authDomain: "pokew-d61b0.firebaseapp.com",
  projectId: "pokew-d61b0",
  storageBucket: "pokew-d61b0.appspot.com",
  messagingSenderId: "287239019892",
  appId: "1:287239019892:web:bc3729420913bf6e97a021",
  databaseURL: "https://pokew-d61b0-default-rtdb.europe-west1.firebasedatabase.app"
};

// Removed insecure client-side admin password constant.
// Use Firebase Auth + rules (recommended) instead of a shared password.