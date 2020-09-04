//Une fois mon HTML terminé, j'annonce toutes mes constantes

const canvas = document.getElementById("canvas");
const score = document.getElementById("score");
const days = document.getElementById("days");
const endScreen = document.getElementById("canvenScreenas");

virusPop();

function virusPop() {
  //Dans cette fonction je veux faire apparaitre des images de façon aléatoire
  let virus = new Image();

  virus.src = "./media/basic-pics/pngwave.png";

  virus.classList.add("virus"); // A chaque fois que je vais créer un virus, ça lui mettra la class"virus" MERCISASS

  virus.style.top = Math.random() * 500 + "px"; // ici je définis l'endroit ou le virus va pop. Dans la hauteur il va chercher aléatroirement entre 1 et 500px, tout pareil pour la largeur
  virus.style.left = Math.random() * 500 + "px";

  let x, y;
  x = y = Math.random() * 45 + 30; // Je randomise la taille du virus. Grace au + 30, mon virus fera minimum 30px
  virus.style.setProperty("--x", `${x}px`); // La ou tu as la variable x, tu injectes le résultat de x
  virus.style.setProperty("--y", `${y}px`);

  let plusMinus = Math.random() < 0.5 ? -1 : 1; // Si math random est inferieur a 0.5 tu fais -1 SI NON +1
  let trX = Math.random() * 500 * plusMinus;
  let trY = Math.random() * 500 * plusMinus;
  virus.style.setProperty("--trX", `${trX}px`); // La ou tu as la variable x, tu injectes le résultat de x
  virus.style.setProperty("--trY", `${trY}px`);

  canvas.appendChild(virus); //Virus est un enfant de canvas, il faut donc l'appeler
}

// Projet javascript créer un jeu pur javascript 21.22
