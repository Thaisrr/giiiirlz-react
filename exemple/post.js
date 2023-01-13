let post;
let user;

async function getPost(id) {
    // fait une requête "GET" vers l'url de l'api passée
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id ); //
    const {data}= await abra.get('https://jsonplaceholder.typicode.com/posts/' + id, );
    //const data = reponse.data;
    post = await response.json();
    displayPost();
    const user_response = await fetch('https://jsonplaceholder.typicode.com/users/' + post.userId);
    user = await user_response.json();
}


getPost(1);

function displayPost() {
    // TODO : gérer l'affichage du post
    console.log(post);
}



