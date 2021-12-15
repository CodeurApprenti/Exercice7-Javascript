let mdpSaisi;
let regexMaj = new RegExp("[A-Z]");
let regexMin = new RegExp("[a-z]");
let regexChiffre = new RegExp("[0-9]");
let regexSpecial = new RegExp("\\W");
let compteur;
let message = document.getElementById('message');

function Verification() {
  compteur = 0;
  mdpSaisi = document.getElementById("mdp").value;

  //Test Majuscule
  if (regexMaj.test(mdpSaisi)) {
    compteur = compteur + 1;
  }
  // Test Minuscule
  if (regexMin.test(mdpSaisi)) {
    compteur = compteur + 1;
  }
  //Test Chiffre
  if (regexChiffre.test(mdpSaisi)) {
    compteur = compteur + 1;
  }
  // Test Caractères Spéciaux
  if (regexSpecial.test(mdpSaisi)) {
    compteur = compteur + 1;
  }
  // Test Longueur du mot de passe 
  if (mdpSaisi.length < 8) {
    compteur = compteur - 1;
  }

  switch (compteur) {
    case 4:
      message.innerHTML = '<span class="text-success"> Très sécurisé ! </span>';
      break;
    case 3:
      message.innerHTML = '<span class="text-success"> Sécurisé ! </span>';
      break;
    case 2:
      message.innerHTML ='<span class="text-warning"> Moyennement Dangereux ! </span>';
      break;
    case 1:
      message.innerHTML = '<span class="text-danger"> Dangereux !</span>';
      break;
    case 0:
      message.innerHTML = '<span class="text-danger"> Dangereux ! </span>';
      break;
    default:
      message.innerHTML = "";
  }
}

document.getElementById('mdp').addEventListener("keyup", Verification, false);
