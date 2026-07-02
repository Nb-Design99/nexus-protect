// NEXUS PROTECT · interactions communes

// Bascule du fond clair / sombre (mémorisé dans le navigateur)
const themeToggle = document.querySelector(".theme-toggle");
function refreshThemeLabel() {
  if (!themeToggle) return;
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  themeToggle.textContent = isLight ? "☾ Sombre" : "☀ Clair";
}
refreshThemeLabel();
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      try { localStorage.setItem("nexus-theme", "dark"); } catch (e) {}
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      try { localStorage.setItem("nexus-theme", "light"); } catch (e) {}
    }
    refreshThemeLabel();
  });
}

// Menu mobile
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav.main-nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
}

// Apparition au scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Bouton "Quitter vite" : remplace la page par un site neutre,
// sans laisser cette page dans l'historique de l'onglet.
const quickExit = document.querySelector(".quick-exit");
if (quickExit) {
  quickExit.addEventListener("click", () => {
    window.open("https://www.google.com", "_newtab");
    window.location.replace("https://www.google.com");
  });
}

// Formulaire de contact (démo) : l'envoi réel sera branché plus tard.
const form = document.querySelector("form.contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.style.display = "block";
      status.textContent =
        "Merci pour votre message. Le formulaire sera activé très prochainement, en attendant, écrivez-nous directement par e-mail.";
    }
    form.reset();
  });
}
