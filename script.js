//Une fois mon HTML terminé, j'annonce toutes mes constantes

const canvas = document.getElementById("canvas");
const score = document.getElementById("score");
const days = document.getElementById("days");
const endScreen = document.getElementById("endScreen");

daysLeft = 60;
gameOverNumber = 3;
loopPlay = false;

start();
function start() {
  count = 0; // Quand on lance pas la fonction, le count se remet à 0
  getFaster = 6000; // me permettra de faire poper les éléments plus vite :6 secondes
  daysRemaining = daysLeft;

  canvas.innerHTML = ""; // Quand je clique sur le bouton le canvas se vide et se met à 0
  score.innerHTML = count; //et dans l'innerHtml on mettra le résultat de 0 // a chaque clic on fera un count ++1 et on affichera le counter (ligne56)
  days.innertHTML = daysRemaining;
}

loopPlay ? "" : game(); // Si tu es égale a vrai tu fais rien, si non tu lances la fonction game
loopPlay = true;

function game() {
  let randomTime = Math.round(Math.random() * getFaster);
  getFaster > 700 ? (getFaster = getFaster * 0.9) : ""; // SI tu es superieur a 700 alors getfaster tu es égal à get faster * 0.90 et si c'est faux on met rien

  setTimeout(() => {
    if (daysRemaining === 0) {
      // SI les jours restants sont === 0 on joue youWIng l'utilisateur à gagné
      youWin();
    } else if (canvas.childElementCount < gameOverNumber) {
      // Si c'est en dessous de 50 virus, on continue à les faire poper et on relance game()
      virusPop();
      game();
    } else {
      // SI  le nombre de gameOverNumber est superier, alors on lance la fonction gameover
      gameOver();
    }
  }, randomTime);

  const gameOver = () => {
    endScreen.innerHTML = `<div class="gameOver">Game over <br/>score :${count} </div>`;
    endScreen.style.visibility = "visible";
    endScreen.style.opacity = "1";
    loopPlay = false;
  };
}

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
// Remove elemet clicked

document.addEventListener("click", function (e) {
  // tu vas écouter le clc, a chaque clic tu vas faire ne fonction avec un evenemnt
  let targetElement = e.target || e.srcElement; // Let targetElement coorespond à = e.target OU || à z.qrcElement

  //console.log(targetElement); // Me permet d'identifier tous les éléments cliqués

  if (targetElement.classList.contains("virus")) {
    // SI targetElement sa classList contient 'virus'
    targetElement.remove(); /// Alors l'élément que tu as ciblé/cliqué tu l'enlève
    count++; //counteur +1
    score.innerHTML = count;
  }
});

//37.28
