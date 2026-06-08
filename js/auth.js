import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export async function signInWithEmail(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
  window.location.href = "upload.html";
}

export async function signUpWithEmail(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
  // after signup, go to upload
  window.location.href = "upload.html";
}

export async function signOutUser() {
  await signOut(auth);
  window.location.href = "login.html";
}

// Call this on pages that require authentication
export function protectRoute(redirectTo = "login.html") {
  // If user not logged in, send them to login page.
  onAuthStateChanged(auth, user => {
    if (!user) location.href = redirectTo;
  });
}
