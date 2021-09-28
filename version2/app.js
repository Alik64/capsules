const demandeBtn = document.querySelector(".demandeIns");
const formulaireDemandeIns = document.querySelector(".form-dem-inscription");
const closeBtn = document.querySelector(".formCloseBtn");

demandeBtn.addEventListener("click", () => {
  formulaireDemandeIns.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  formulaireDemandeIns.classList.remove("open-modal");
});
