import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// NOTE: Do NOT commit your real Firebase credentials to public repos.
// Replace the placeholder values below with your Firebase project's
// configuration. If you need to keep secrets out of the repo, store
// the real object in a separate local file or environment and paste
// it here before running locally.
//
// Place your Firebase config values here (from Firebase Console -> Project settings):
// {
//   apiKey: "PLACE_YOUR_API_KEY_HERE",
//   authDomain: "PLACE_YOUR_AUTH_DOMAIN",
//   projectId: "PLACE_YOUR_PROJECT_ID",
//   storageBucket: "PLACE_YOUR_STORAGE_BUCKET",
//   messagingSenderId: "PLACE_YOUR_MESSAGING_SENDER_ID",
//   appId: "PLACE_YOUR_APP_ID"
// }

const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};

// Initialize Firebase (safe to leave as-is; values above must be replaced locally)
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// If you use callable functions, update region in your Cloud Functions code
export const functions = getFunctions(app);
