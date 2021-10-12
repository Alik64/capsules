// page d'accueil

const demandeBtn = document.querySelector(".demandeIns");
const formulaireDemandeIns = document.querySelector(".form-dem-inscription");
const closeBtn = document.querySelector(".formCloseBtn");

demandeBtn.addEventListener("click", () => {
  formulaireDemandeIns.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  formulaireDemandeIns.classList.remove("open-modal");
});

// Page ADMIN - Utilisateur

// MENU Tablette + Portable open/close
const menuMobil = document.querySelector(".menu-mobil");
const headerMenu = document.querySelector(".header_menu");

menuMobil.addEventListener("click", () => {
  headerMenu.classList.toggle("open");
});

// Ajout nouveau muselet

const ajouterCaps = document.querySelector("#addNewCaps");
const newCapsContainer = document.querySelector(".newCaps-container");
const newCapsCloseBtn = document.querySelector(".newCapsCloseBtn");

ajouterCaps.addEventListener("click", () => {
  newCapsContainer.classList.add("openModal");
  headerMenu.classList.remove("open");
});

newCapsCloseBtn.addEventListener("click", () => {
  newCapsContainer.classList.remove("openModal");
});
