// Pseudo-code
// Au clic sur le bouton Accepter, 
// la DIV cookies devient invisible

// Je selectionne et je stocke : 
const btnSuccess = document.querySelector('.btn-success');
// console.log(btnSuccess, "Le bouton accepter les cookies");
const cookies = document.querySelector('.cookies');
// console.log(cookies, "la DIV cookies");

// je soumet le bouton à une action
btnSuccess.addEventListener('click', function(){
    // console.log("bouton cliqué");    
    // cookies.remove(); ma façon de supprimer la div
    cookies.style.opacity = "0"; //façon de supprimer la div du livre car ajout d'une transition
})