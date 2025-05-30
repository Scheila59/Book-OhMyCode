// pseudo-code :
// Au démarrage de l'application, les ARTICLES sont affichés dans la DIV POSTS 

const postsContainer = document.querySelector('.posts');
// console.log(postContainer,"la div des articles");

// Création d'un objet ici l'objet Post


// J'accede à la valeur de la propriété titre
// const t = post.titre;
// console.log(t, "le titre de l'article");

// Création d'un tableau d'objets pour automatiser l'affichage 
const posts = [   
    { 
        titre : "SEO, les bonnes pratiques",
        hashtag : "#SEO",
        extrait : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        titre : "Bien débuter en référencement payant",
        hashtag : "#référencement",
        extrait : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        titre : "Content Marketing, les bons arguments",
        hashtag : "#contentmarketing",
        extrait : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
];
// console.log(posts, "le tableau des différents articles");
// --------------------J'affiche chaque élément du tableau--------------------------------
// Je passe en revue chaque élément du tableau (a l'aide d'une boucle)
posts.forEach(item => {
    // console.log(item);

    // création d'une DIV avec template Strings
    const article =`
                    <div class="post">
                        <div class="post-titre"> ${item.titre}</div>
                        <div class="post-extrait"> ${item.extrait}</div>
                        <div class="post-hashtag"> ${item.hashtag}</div>
                    </div>
                    `
    // console.log(article);                    
    // --------------------Je place la variable article dans la page-----------------------
    postsContainer.innerHTML += article;
})