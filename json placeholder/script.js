let obecnyPost = 1;


 const pokaz = (postId) => 
 fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            document.getElementById('tytul').textContent = post.title;
            document.getElementById('Pbody').textContent = post.body;
        });
    
const poprzedni = () => {
    if (obecnyPost > 1) {
        obecnyPost--;
        pokaz(obecnyPost);
    }
};
const nastepny = () => {
    obecnyPost++;
    pokaz(obecnyPost);
};