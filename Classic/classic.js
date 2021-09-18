const nav = document.querySelector("#navbar");
const burger = document.querySelector(".menu-mobile");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});
