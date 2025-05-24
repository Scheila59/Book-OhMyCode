// Pseudo-code : 
// 'Au clic' sur une QUESTION , la REPONSE ASSOCIE /apparait/
// 'Au clic suivant' sur la MEME QUESTION , la REPONSE ASSOCIE /disparait/

const questions = document.querySelectorAll('.question');
// console.log(questions);

const reponses = document.querySelectorAll('.reponse');
// console.log(reponses);

// J'accede à un élément précis du tableau [questions] en écrivant: tableau[index]
// const deux = questions[2];
// console.log(deux, "la question 3 qui à un index 2 (commence à 0");

// Cette écriture renvoie une erreur : tableau.addEventListener
// questions.addEventListener('click',()=>{
//     console.log("question cliquée ! ");    
// })
// DONC-----------NOUVEAU PSEUDO-CODE-------------------------------------
//'Au clic' sur "CHAQUE" ELEMENT DU TABLEAU, la REPONSE ASSOCIEE /apparait/
// Je soumets donc chaque element du tableau à la meme action

// nomDuTableau.forEachPourChaque((elementDuTableauItem)=>{
    // action à realiser exemple : 
    // console.log('item');
// })
questions.forEach((item)=>{
    // console.log(item, 'item');
    // Chaque élément du tableau est représenté par item,
    //  maintenant chaque élément du tableau (item) est soumis à une action au clic
    item.addEventListener('click', ()=>{
        // console.log('question(item) cliquée ! ');

        // SI l'utilisateur 'clique' sur la QUESTION 1 , la REPONSE 1 doit s'/afficher/
        // SI l'utilisateur 'clique' sur la QUESTION 2, la REPONSE 2 doit s'/afficher/
        // etc..... SOLUTION: nextElementSibling = Je cible l'élément voisin.
        // const elementSuivant = elementDeReference.nextElementSibling;
        const next = item.nextElementSibling;
        console.log(next, "reponse associé");
        next.classList.toggle('visible')    
        // Parfait cela fonctionne mais l'icone devient de trop :
        const icone = item.lastElementChild; /*je vise le dernier elément enfant de l'élement de réference*/
        // console.log(icone, "le chevron");
        icone.classList.toggle('fa-chevron-down')
        icone.classList.toggle('fa-chevron-up')
    })
})