const HEADER = document.querySelector(".header");
const TOGGLE = document.querySelector(".toggle");
const BODY = document.body;
let mql = window.matchMedia("(max-width: 870px)");

function updateHeaderHeight() {
  document.documentElement.style.cssText = `--header-height: ${
    HEADER.getBoundingClientRect().height
  }px`;
}

window.addEventListener("scroll", () => {
  HEADER.classList.toggle("header--scrolling", window.scrollY > 0);
});

window.addEventListener("DOMContentLoaded", () => {
  updateHeaderHeight();
});

mql.addEventListener("change", () => {
  HEADER.classList.toggle(
    "header--open",
    HEADER.classList.contains("header--open")
  );
  updateHeaderHeight();
});

TOGGLE.addEventListener("click", () => {
  HEADER.classList.toggle(
    "header--open",
    !HEADER.classList.contains("header--open")
  );
  BODY.classList.toggle("no-scroll", HEADER.classList.contains("header--open"));
});
