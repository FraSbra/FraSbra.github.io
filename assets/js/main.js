// Minimal site interactions.
// Keep this file small so future manual edits stay straightforward.

const navToggle = document.querySelector(".site-nav-toggle");
const nav = document.querySelector(".site-nav");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleLabel = document.querySelector(".theme-toggle__label");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const root = document.documentElement;
const storageKey = "site-theme";
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function readStoredTheme() {
  try {
    return window.localStorage.getItem(storageKey);
  } catch (error) {
    return null;
  }
}

function writeStoredTheme(theme) {
  try {
    window.localStorage.setItem(storageKey, theme);
  } catch (error) {
    // Ignore storage failures so the switch still works for the current visit.
  }
}

function updateThemeButton(theme) {
  if (!themeToggle || !themeToggleLabel) {
    return;
  }

  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextThemeLabel = nextTheme === "dark" ? "Dark theme" : "Light theme";

  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  themeToggle.setAttribute("title", `Switch to ${nextTheme} theme`);
  themeToggleLabel.textContent = nextThemeLabel;
}

function updateThemeColor(theme) {
  if (!themeMeta) {
    return;
  }

  const themeColor = theme === "dark" ? themeMeta.dataset.dark : themeMeta.dataset.light;

  if (themeColor) {
    themeMeta.setAttribute("content", themeColor);
  }
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  updateThemeColor(theme);
  updateThemeButton(theme);
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (themeToggle) {
  const initialTheme = root.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    writeStoredTheme(nextTheme);
  });

  const syncSystemTheme = (event) => {
    if (readStoredTheme()) {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  };

  if (typeof systemThemeQuery.addEventListener === "function") {
    systemThemeQuery.addEventListener("change", syncSystemTheme);
  } else if (typeof systemThemeQuery.addListener === "function") {
    systemThemeQuery.addListener(syncSystemTheme);
  }
}
