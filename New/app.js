// Page ADMIN - Utilisateur

// MENU Tablette + Portable open/close
const menuMobil = document.querySelector(".menu-mobil");
const headerMenu = document.querySelector(".header_menu");

menuMobil.addEventListener("click", () => {
  headerMenu.classList.toggle("open");
});

// Changement image RECTO - VERSO

const rvButtons = document.querySelectorAll(".ico-rv") || [];
rvButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const icoRV = e.target;

    const cardImg =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.children[0].children[0];

    if (icoRV.classList.contains("verso")) {
      cardImg.src = cardImg.dataset.recto;
      icoRV.classList.remove("verso");
      icoRV.style.transform = "rotate(360deg)";
    } else {
      cardImg.src = cardImg.dataset.verso;
      icoRV.classList.add("verso");
      icoRV.style.transform = "rotate(180deg)";
    }
  });
});
