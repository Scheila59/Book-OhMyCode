// Pseudo-code
// 'Au clic' sur l'ICONE, la DIV MODAL /descend jusqu'en bas de l'écran/ et l'icône /se modifie en croix./
// 4Au clic suivant4, la div modal /remonte jusqu'en haut de l'écran/ et l'icône /reprend sa forme d'origine/.(menu burger)

// Je selectionne et je stocke les éléments 

const icon = document.querySelector('.navbar-mobile i');
console.log(icon, "l'icone du menu burger");

const modal = document.querySelector('.modal');
// console.log(modal, "la div modal");

// Je soumet l'icone à une action au clic
icon.addEventListener('click', function(){
    // console.log("icone cliqué");
    // la div modal descend jusqu'en bas de l'écran
    modal.classList.toggle('change-modal');
    // l'icone change de forme
    icon.classList.toggle('fa-times');
})

