const nav = document.querySelector("#navbar");
const burger = document.querySelector(".menu-mobile");

// dès qu'on clique sur bouton de menu mobile, menu s'ouvre
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});
