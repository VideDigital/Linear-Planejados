const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const whatsappDemoButton = document.querySelector(".js-whatsapp-demo");
const contactNote = document.querySelector("#contact-note");
const currentYear = document.querySelector("#current-year");

function setHeaderState() {
  header?.classList.toggle("scrolled", window.scrollY > 12);
}

function closeMenu() {
  if (!menuToggle || !siteNav) return;

  menuToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

whatsappDemoButton?.addEventListener("click", () => {
  contactNote.textContent =
    "O WhatsApp oficial ainda precisa ser validado antes de publicarmos o contato no demo.";
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}