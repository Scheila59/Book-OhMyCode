// console.log('connecté !');

// document.getElementById('titre').stle.color = "green"
// let titre = document.getElementById('titre');
// console.log(titre);


// titre = 2;
// console.log(titre); // renvoie 2

let score = 0; // je stocke un nombre
// console.log(score, "initialisation"); // je verifie

score = score + 1 ; // opération
// console.log(score, "après addition"); // je verifie

// Je stocke une chaîne de caractères
const cours = "Javascript";
// je verifie 
// console.log(cours, "cours");

// je concatène
const mot1 = "Hello";
const mot2 = "World!";
const phrase = mot1 + " " + mot2 ; // concaténation
// console.log(phrase, "phrase"); // je verifie

// Calcul
let calcul = "0"; // je stocke
calcul = calcul + 1 ; // addition
// console.log(calcul, "calcul"); // je verifie

// -----------------------------La méthode des 3S cercle rouge

// je selectionne 
// je stocke
// Je soumet l'élément à une action

// je selectionne et je stocke
const btnRed = document.getElementById('btn-red');
// console.log(btnRed, "bouton rouge");
const btnBlue = document.getElementById('btn-blue')
// console.log(btnBlue, "bouton bleu");
let titre = document.getElementById('titre');
titre.style.color = "green";
let compteur = 0;
console.log(compteur, "compteur au demarrage");
const btnReplay = document.querySelector('#rejouer');
// console.log(btnReplay, "bouton rejouer");
let resultScore = document.querySelector('#result-score');

// je soumet le cercle rouge à une action
btnRed.addEventListener('click', function(){
    // console.log('cliqué');
    //ici l'action : incrémenter le compteur de 1   
    add();   
});
// je soumet le cercle bleu à une action
btnBlue.addEventListener('click', function(){
    // console.log('cercle bleu cliqué'); 
    add();
});
// je soumet le bouton rejouer à une action
btnReplay.addEventListener('click', function(){
    // console.log('bouton rejouer cliqué ! '); 
    location.reload();
});
function add(){
    compteur = compteur + 1;
    console.log(compteur,"compteur apres incrémentation"); 
    resultScore.innerText = compteur;
}
setTimeout(function(){
    //action à réaliser : je supprime les cercles
    btnRed.remove();   
    btnBlue.remove();   
    // à la fin du délai
}, 10000)
