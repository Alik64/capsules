// MENU Tablette + Portable open/close
const menuMobil = document.querySelector(".menu-mobil");
const headerMenu = document.querySelector(".header_menu");

menuMobil.addEventListener("click", () => {
  headerMenu.classList.toggle("open");
});
