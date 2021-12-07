// PAGE AJOUT / MODIFICATION - Capsule

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
