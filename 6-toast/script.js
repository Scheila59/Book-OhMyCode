// pseudo-code
// 'Au clic' sur le BOUTON, une DIV est /crée/ et est /ajoutée/ dans la DIV CONTAINER-NOTIFICATIONS
// le NOUVEL ELEMENT /disparait/ au bout de quelques secondes
// ---------------------------------------------------------------


const btn = document.querySelector('.btn');
// console.log(btn, "le bouton");

const ctn = document.querySelector('.container-notifications');
// console.log(ctn, "la div container-notifications");

btn.addEventListener('click', () => {
    // console.log("bouton cliqué !");
    // Etapes création d'un élément :

// 1. je crée un élément
const notifications = document.createElement('div');
// console.log(notifications, "div crée au clic");

// 2. je lui donne un style
notifications.classList.add('toast');

// 3. J'insère du contenu dans l'élément
notifications.innerText = "Votre fichier est bien enregistré !"
// console.log(notifications);

// 4. j'accroche l'élément complet à un élément précis dans la page 
// la structure de la ligne de code à ecrire est la suivante : contenant.appendChild(element enfant);
ctn.appendChild(notifications);
// -----------------------J'ajoute un timer-----------------------------
// 'A la fin du temps fixé, /faire disparaitre/ LA DIV du DOM 
// Comme le timer doit se déclancher au clic , on le met également dans l'écoute du clic
setTimeout(function(){
    notifications.remove();
}, 2000);
})


