// Pseudo-code:
// 'Au clic' sur une VIGNETTE, celle-ci /s'affiche en grand format/
// 'Au clic' sur le BOUTON, une PHRASE /apparait/ indiquant le nombre d'élements dans le panier.

const vignettes = document.querySelectorAll(".small");
// console.log(vignettes, "les images format vignettes");

const fullImg = document.getElementById("full");
// console.log(fullImg, "l'image grand format");

// les trois vignettes doivent se comporter de la même façon on doit donc faire une boucle
vignettes.forEach((item) => {
  // console.log('ce message apparait pour chaque item(vignettes)du tableau');
    item.addEventListener("click", function () {
    // console.log(item, "vignette cliquée ! ");
    let imgSource = item.getAttribute("src");
    // console.log(imgSource, 'src de la vignette');
    fullImg.setAttribute("src", imgSource);
    });
});
// -------------J'ajoute un message au clic--------------------
// 'Au clic' sur le BOUTON, un MESSAGE /apparait/ précisant le nombre d'article dans le panier

const btn = document.querySelector(".btn-add");
// console.log(btn, "bouton ajouter dans le panier");
const panierContainer = document.querySelector(".panier-container");
// console.log(panierContainer, "le paragraphe panier");

// J'ajoute les produits au panier(j'initialise une variable panier)
let panier = 0; /*Le panier est vide au départ */
// Au clic sur le bouton j'incrémente 1 à la valeur du panier
btn.addEventListener("click", () => {
    panier = panier + 1;
  // console.log(panier, "nombre d'article dans le panier");

  // Pour l'instant le panier est bien incrémenter mais l'utilisateur ne voit rien
  // J'affiche le resultat
    if (panier < 2) {
    panierContainer.innerHTML =
        "Vous avez" + " " + panier + " " + "produit dans votre panier";
    } else {
        panierContainer.innerHTML =
        "Vous avez" + " " + panier + " " + "produits dans votre panier";
    }
});
