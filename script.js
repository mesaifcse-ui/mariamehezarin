const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const year = document.getElementById("year");
const fakeSend = document.getElementById("fakeSend");

year.textContent = new Date().getFullYear();

function setTheme(t) {
  root.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
  themeIcon.textContent = t === "light" ? "☀️" : "🌙";
}

const saved = localStorage.getItem("theme");
setTheme(saved || "dark");

themeBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

fakeSend?.addEventListener("click", () => {
  alert("✅ Message UI works. To actually receive messages, connect a form service (Formspree / Getform / Netlify Forms).");
});
