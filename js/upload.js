import { functions } from "./firebase-config.js";
import { httpsCallable } from "firebase/functions";
import { protectRoute, signOutUser } from "./auth.js";

protectRoute();

const analyzeResume = httpsCallable(functions, "analyzeResume");

document.getElementById("analyzeBtn").onclick = async () => {
  const text = document.getElementById("resumeText").value;

  const result = await analyzeResume({
    resumeText: text,
    fileName: "resume.txt"
  });

  localStorage.setItem("analysis", JSON.stringify(result.data));
  window.location.href = "dashboard.html";
};

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) logoutBtn.onclick = () => signOutUser();
