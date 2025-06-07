// Pseudo code:
// 'A la validation' du FORMULAIRE, la TACHE est /recuperer/
// et est /afficher/ dans la PAGE

const form = document.getElementById('form');
// console.log(form);  
const todo = document.getElementById('todo');
// console.log(todo);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log("bouton ajouter cliqué !");
    const todoValue = todo.value;
    // console.log(todoValue);

    // A la validation du formulaire, je crée un élément HTML
    // contenant la valeur renseignée et je l'affiche
    let item = `
        <div class="item">
            <p>${todoValue}</p>
            <button class="btn-delete">
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="btn-archive">
                <i class="fas fa-check-circle"></i></i>
            </button>
        </div>
    `    
    // Dans la DIV list-items, je /place/ la TACHE(item)
    const listItems = document.querySelector('.list-items');
    // console.log(listItems); 

    // je /place/ ITEM dans la DIV list-items
    listItems.innerHTML += item;

// --------------------------------Je gere la suppression des taches :------------------
//  'Au clic' sur l'icone SUPPRIMER, la TACHE est /retiré/ de la PAGE
    const btnDelete = document.querySelectorAll('.btn-delete');
// console.log(btnDelete);

    btnDelete.forEach(i => {
        // console.log(btnDelete); 
        // 'au clic' sur un BTN supprimer (enfant) , l'ELEMENT PARENT /disparait/
        i.addEventListener('click', function(){
             // console.log("btn-delete cliqué !");     
             // J'enleve l'élément parent
            i.parentElement.remove(); 
        })
    })

    // ---------------------------Je gère la 'modification'(validation) de la tâche
    // 'au clic sur l'ICONE VALIDER/ARCHIVER, la TACHE est /rayée/.
    const btnArchive = document.querySelectorAll('.btn-archive');
    // console.log(btnArchive);

    btnArchive.forEach(i => {
        // console.log(btnArchive);
        i.addEventListener('click', function(){
            // console.log("btn validé cliqué!");
            // je cible l'élément parent de i
            const parent = i.parentElement;
            // j'agis sur la div parent (class item)
            parent.classList.toggle('done')
        })        
    })
    // Reinitialiser le formulaire
    form.reset();
});


