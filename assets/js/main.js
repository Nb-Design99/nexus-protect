// NEXUS PROTECT · interactions communes

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
