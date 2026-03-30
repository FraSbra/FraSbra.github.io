// Minimal site interactions.
// Keep this file small so future manual edits stay straightforward.

const navToggle = document.querySelector(".site-nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
