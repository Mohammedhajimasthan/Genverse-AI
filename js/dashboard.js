import { protectRoute, signOutUser } from "./auth.js";

protectRoute();

const data = JSON.parse(localStorage.getItem("analysis") || "null");

const scoreEl = document.getElementById("score");
const skillsEl = document.getElementById("skills");
const suggestionsEl = document.getElementById("suggestions");

if (data) {
  scoreEl.innerText = data.score ?? "N/A";

  skillsEl.innerHTML = (data.missingSkills || [])
    .map(s => `<li>${s}</li>`).join("");

  suggestionsEl.innerHTML = (data.improvementSuggestions || [])
    .map(s => `<li>${s}</li>`).join("");
}

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) logoutBtn.onclick = () => signOutUser();
