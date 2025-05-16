//  pseudo-code :
// Au clic sur l'icône neutre devient l'icône sourire.
// Au clic sur le bouton, le bouton change de texte et de couleur.

// Je selectionne et je stocke les éléments nécessaire
// icone contient le premier élément <i> trouvé dans le code
const icone = document.querySelector("i");
// console.log(icone, "premier i trouvé")
// btnButton contient le premier élément avec la classe btn
const btnButton = document.querySelector('.btn');
// console.log(btnButton, "Premier btn trouvé");

// Je soumet l'icone à une action au clic
icone.addEventListener('click', function(){
    icone.classList.toggle('fa-face-meh-blank');
    icone.classList.toggle('fa-face-smile-wink');
    icone.classList.toggle('happy');
});
// Je soumet le bouton à une action au clic
btnButton.addEventListener('click', function(){
    // console.log("bouton cliqué");

    // pseudo-texte:
    // Si le texte du bouton est Abonné, 
    // Alors le texte du bouton devient Abonnez-vous,
    // Sinon (le texte n'est pas Abonné),
    // Le texte du bouton devient Abonné.
    if (btnButton.innerText === "Abonné") {
        btnButton.innerText = "Abonnez-vous"    
    } else {
        btnButton.innerText = "Abonné"
    };
    btnButton.classList.toggle('abonne');
})
