const nav = document.querySelector(".main-nav") as HTMLElement;
const openBtn = document.querySelector(".nav-menu") as HTMLButtonElement;
const closeBtn = document.querySelector(".close-nav-menu") as HTMLButtonElement;

const navLinks =
  document.querySelectorAll<HTMLAnchorElement>("#nav-links-list a");
const sections = document.querySelectorAll<HTMLElement>(".section");

openBtn.addEventListener("click", () => nav.classList.add("open"));
closeBtn.addEventListener("click", () => nav.classList.remove("open"));

navLinks.forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const navHighlightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (!id) return;

      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  },
  {
    threshold: [0.2, 0.7],
  }
);
sections.forEach((section) => navHighlightObserver.observe(section));

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

window.addEventListener("scroll", () => {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
  }
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader") as HTMLElement;
  const mainContent = document.getElementById("main-content") as HTMLElement;

  if (document.readyState === "complete") {
    removePreloader(preloader, mainContent);
  } else {
    window.addEventListener("load", () => {
      removePreloader(preloader, mainContent);
    });
  }
});

function removePreloader(preloader: HTMLElement, mainContent: HTMLElement) {
  preloader.classList.add("fade-out");

  preloader.addEventListener("transitionend", () => {
    preloader.classList.add("add-display-none");
    mainContent.style.display = "block";
  });
}
