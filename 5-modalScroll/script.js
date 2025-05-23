// Pseudo-code
// 'Au defilement de la page vers le bas', la DIV MODAL-CONTAINER /apparait/

const modalContainer = document.querySelector('.modal-container');
// console.log(modalContainer, "la div modal-container");

// ET 'au clic sur LE BOUTON', la DIV CODE /apparait/ et le bouton disparaît

const btnSuccess = document.querySelector('.btn-success');
// console.log(btnSuccess, "le bouton");
const code = document.querySelector('.code');
// console.log(code, "le code");

//ET  'Au clic' sur l'ICONE, la DIV MODAL-CONTAINER /disparait/ et le navigateur ne déclanchera plus d'action au défilement

const icon = document.querySelector('.fa-times');
// console.log(icon, "l'icone")

window.addEventListener('scroll', displayModal) 

function displayModal(){
    // console.log("Défilement de la page détécté !");
    let hauteur = document.documentElement.scrollTop;
    // console.log(hauteur, "nombre de pixels depuis le haut de la page");
    // Si la hauteur est supérieure à 400px, alors la DIV MODAL-CONTAINER apparait
    if(hauteur > 400){
        // console.log('Affichage de la modale'); 
        modalContainer.style.display = "flex";       
    };  
}

btnSuccess.addEventListener('click', ()=>{
    // console.log('clic sur le bouton');
    // je rend visible le code
    code.style.display = "block";
    // je rend invisible le bouton
    btnSuccess.style.display = "none";
})
icon.addEventListener('click', ()=>{
// console.log("icone cliqué");
// Je rend invisible la modale
modalContainer.style.display = "none";
// J'annule l'événement scroll
window.removeEventListener('scroll', displayModal)
})