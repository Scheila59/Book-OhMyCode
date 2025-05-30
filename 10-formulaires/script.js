// Pseudo-code:
// 'A la validation du formulaire(SUBMIT),'
// je récupère les valeurs des champs(INPUT) renseignées par l'utilisateur et je verifie
// leur conformité.
// SI les valeurs sont conformes,
// alors un message de succès apparaît.
// SINON, un message d'erreur apparaît.

// je selectionne :------------------------------------------
const form = document.getElementById('formulaire');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

const msgError = document.querySelectorAll('.error');

const titre = document.getElementById('titre');
// console.log(titre);


// je detecte la validation du formulaire -------------------------------------
form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log("formulaire envoyé ! ");

    // Je récupère les valeurs de chacun des inputs----------------------
    const prenomValue = prenom.value.trim();
    console.log(prenomValue, "prenom");
    const nomValue = nom.value.trim();
    console.log(nomValue, "nom");
    const emailValue = email.value.trim();
    console.log(emailValue, "email");
    const messageValue = message.value.trim();
    console.log(messageValue, "message");
    

    // Amélioration du l'expérience utilisateur, touts les messages d'erreur sont invisible
    msgError.forEach(error=>{
        error.classList.add('invisible');
    });

    // Je verifie les informations de l'utilisateur ---------------------------------
    // Si le champ prénom est vide, alors un message d'erreur apparait
    // Sinon, on affiche un message de succès.
    if(prenomValue.length < 2 || prenomValue.length > 10){
        // console.log('erreur prenom');
        prenom.nextElementSibling.classList.remove('invisible');
    }else if(nomValue.length < 3 || nomValue.length > 15){
        // console.log('erreur nom');
        nom.nextElementSibling.classList.remove('invisible');        
    }else if(messageValue.length < 10 || messageValue.length > 100) {
        // console.log('erreur message');
        message.nextElementSibling.classList.remove('invisible');        
    }else {
        // console.log("succès !");        
        titre.innerText = "Votre message a bien été envoyé !"
        form.remove();
    }       
})
