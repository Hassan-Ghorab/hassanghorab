const logo = document.getElementById("logo") as HTMLImageElement;
const preloaderLogo = document.getElementById(
  "preloader-logo"
) as HTMLImageElement;
const themeToggleBtn = document.getElementById(
  "theme-toggle-btn"
) as HTMLButtonElement;
const body = document.body;

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" role="img"><path d="M120 40v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm0 116.68l-8 8a8 8 0 0 0 11.32 11.32l8-8a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l8 8a8 8 0 0 0 11.32-11.32ZM40 120h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16m88 88a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8m96-88h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16"/></svg>`;

const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" role="img"><path d="M13.719 1.8A8.759 8.759 0 1 1 1.8 13.719c3.335 1.867 7.633 1.387 10.469-1.449c2.837-2.837 3.318-7.134 1.45-10.47"/></svg>`;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-theme");
  themeToggleBtn.innerHTML = moonIcon;
} else {
  body.classList.remove("light-theme");
  themeToggleBtn.innerHTML = sunIcon;
}

function updateLogo() {
  if (!logo || !preloaderLogo) return;
  if (body.classList.contains("light-theme")) {
    logo.src = "./assets/dark-logo.webp";
    preloaderLogo.src = "./assets/dark-logo.webp";
  } else {
    logo.src = "./assets/light-logo.webp";
    preloaderLogo.src = "./assets/light-logo.webp";
  }
}
updateLogo();

themeToggleBtn.addEventListener("click", () => {
  const isLight = body.classList.toggle("light-theme");
  themeToggleBtn.innerHTML = isLight ? moonIcon : sunIcon;
  localStorage.setItem("theme", isLight ? "light" : "dark");
  updateLogo();
});
