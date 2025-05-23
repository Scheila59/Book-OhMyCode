// Pseudo-code:
// 'Au clic' sur la DIV SWITCH, LE CERCLE /se déplace/, L'ICONE /se déplace et se transfrorme/,
// LA DIV CONTAINER /change de couleur de fond/, LE TITRE /change/
// (et dû au défi): Le BOUTON AUGMENTER et le BOUTON DIMINUER /change de couleur de fond et de couleur de police/.

// Je selectionne et je stocke :
// - La div switch 
const switchbox = document.querySelector('.switch');
// console.log(switchbox, "la div switch");

// - le cercle
const btn = document.querySelector('.btn');
// console.log(btn,"le bouton");

// - l'icone
const icone = document.querySelector('i');
// console.log(icone,"l'icone");

// - la div container
const container = document.querySelector('.container');
// console.log(container, "la div container");

// - le titre
const titre = document.querySelector('h1');
// console.log(titre, "le titre");

// - le bouton augmenter
const augmenter = document.querySelector('.augmenter')
// console.log(augmenter, "le bouton augmenter");

//  - le bouton diminuer
const diminuer = document.querySelector('.diminuer')
// console.log(diminuer, "le bouton diminuer");


// Je soumet la DIV switch à une action au clic 
switchbox.addEventListener('click', function(){
    // console.log('div cliquée');
    // Je déplace le cercle
    btn.classList.toggle('btn-change');

    // Je deplace et je transforme l'icone
    icone.classList.toggle('icone-change');
    icone.classList.toggle('fa-moon');
    icone.classList.toggle('fa-sun');
    
    // la div switch change de couleur de fond
    switchbox.classList.toggle('switch-change');

    // La div container change de couleur de fond
    container.classList.toggle('container-change');

    // Le titre change :

    // si le texte est DARK MODE, affiche LIGHT MODE, sinon affiche DARK MODE.
    if (titre.innerText === "DARK MODE") {
        titre.innerText = "LIGHT MODE";
    } else {
        titre.innerText = "DARK MODE"
    } 

    // le bouton augmenter change
    augmenter.classList.toggle('button-change')

    // le bouton diminuer change
    diminuer.classList.toggle('button-change')
    
})

// DEFI : Augmenter ou diminuer la taille de la police
// Pseudo-code : 
// Au clic sur le bouton augmenter , augmenter la taille de la police du titre
// Au clic sur le bouton diminuer , diminuer la taille de la police 

// Je soumet le bouton augmenter à une action au clic 
augmenter.addEventListener('click', function(){
    // console.log("bouton augmenter cliqué ! ");
    // les etapes seraient : -recuperer la taille actuelle, la convertir en nombre , l'incrementer
    let sizeTitle = window.getComputedStyle(titre).fontSize;
    // console.log(sizeTitle, "taille actuelle du titre");
    let sizeNumber = parseInt(sizeTitle); /*convertit "32px" en nombre 32*/
    sizeNumber += 1 ;/*augmenter de 1 */
    titre.style.fontSize = sizeNumber + 'px';
    //OU titre.style.fontSize = `${sizeNumber}px`; /* utilisation du template literal*/
});

// Je soumet le bouton diminuer à une action au clic
diminuer.addEventListener('click', function(){
    // console.log("bouton diminuer cliqué !");   
    // etapes identique mais cette fois ci je décrémente 
    // recuperer la taille actuelle du titre
    let sizeTitle = window.getComputedStyle(titre).fontSize;
    console.log(sizeTitle, "taille actuelle du titre");
    // convertir la donnée recuperer en nombre
    let sizeNumber = parseInt(sizeTitle);
    sizeNumber -= 1 ; /*diminuer de 1 */
    // changer la taille de police en fonction du calcul fait précédemment 
    titre.style.fontSize = sizeNumber +'px';
    // titre.style.fontSize = `${sizeNumber}px`;
})