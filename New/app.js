// Page ADMIN - Utilisateur

// MENU Tablette + Portable open/close
const menuMobil = document.querySelector(".menu-mobil");
const headerMenu = document.querySelector(".header_menu");

menuMobil.addEventListener("click", () => {
  headerMenu.classList.toggle("open");
});

// Page Ajout - Modification Capsule

const inputRecto = document.querySelector("#newCaps-Recto");
const inputVerso = document.querySelector("#newCaps-Verso");
const imgRecto = document.querySelector("#imgRecto");
const imgVerso = document.querySelector("#imgVerso");

// Aperçu de l'image Recto
inputRecto.onchange = (e) => {
  const [file] = inputRecto.files;
  if (file) {
    imgRecto.src = URL.createObjectURL(file);
    imgRecto.style.visibility = "visible";
  }
};
// Aperçu de l'image Verso

inputVerso.onchange = (e) => {
  const [file] = inputVerso.files;
  if (file) {
    imgVerso.src = URL.createObjectURL(file);
    imgVerso.style.visibility = "visible";
  }
};
