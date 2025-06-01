const yearEl = document.getElementById("year") as HTMLElement;
const scrollToTopBtn = document.getElementById(
  "scrollToTopBtn"
) as HTMLButtonElement;

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.classList.remove("add-display-none");
  } else {
    scrollToTopBtn.classList.add("add-display-none");
  }
};

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const year = new Date().getFullYear();
yearEl.innerText = year.toString();
