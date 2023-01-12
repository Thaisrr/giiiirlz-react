
function request() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(120)
           // reject({message: "I'm a teapot !", status: 418})

        }, 3000)
    })
} // youhouh

function getById(id) {
    return new Promise((resolve, reject) => {
        resolve({id, text: 'Youhouh !'})
    })
}



let id;
let article;
request()
    .then((response) => {
        id = response;
        console.log(id); // youhouh
        return getById(id) // retourne une promesse
    })
    .then((response) => article = response)
    .catch((error) => console.log(`[ERROR ${error.status}] : ${error.message}`))  // catch toutes les erreurs
    .finally(() => console.log('Finito !'))

console.log(id); // undefined



let text;
request()
    .then((id) => getById(id))
    .then(res => text = res)
    .catch(err => console.log(err.message))


// Async Await

async function getDatas() {
    // On peut faire des opérations asynchrones, manipuler des promesses
    // mais l'intérieur de la fonction est "synchrone"
    // On met "await" devant chaque promesse / fonction asynchrone pour attendre sa résolution avant de passer à la suite
    try {
        const id = await request(); // attend la résolution de la promesse pour enregistrer le résultat
        console.log(id);
        const article = await getById(id);
        console.log(article);
        //
    } catch(e) {
        console.log(e.message || e);
    } finally {
        console.log('finito')
    }
}
getDatas(); // asynchrone

/*
fetch('www.monapi.fr/user')
    .then(res => res.json()) // ligne obligatoire pour accéder aux données
    .then(data => console.log(data))
    .catch(e => console.log(e))

async function getUsers() {
    try {
        const res = await fetch('url/chemin');
        const datas = await res.json();
    } catch (e) {
        console.log(e);
    }
}

*/
/**********
 * SOIT -
 *      HTML + Script / fichier JS -> console du navigateur
 *      Un fichier JS +   node chemin/monfichier.js    => console de l'IDE
 *
 *  https://jsonplaceholder.typicode.com/users
 *  Utiliser JSON.placehoder pour afficher dans la console la liste des utilisateurs
 *  Utiliser JSON placeholder pour afficher l'utilisateur ayant l'id 1
 *
 *  -- 16h30
 *
 *  Créer une fonction qui permet d'afficher un utilisateur via son id
 *  ( appeler cette fonction avec les ID 1, 5, 20 )
 *  => Si il n'y a pas d'utilisateurs, ou en cas d'erreur afficher "Aucune utilisateur⋅trice trouvé⋅e
 *
 *  Faire une fonction pour récupérer un post ( /posts ) par son ID
 *  + Récupérer l'utilisateur qui a créé le post
 *  => Afficher dans la console "[ Nom de l'utilisateur⋅trice ] : titre du post"
 *
 */

const api_url = 'https://jsonplaceholder.typicode.com';

async function loadUsers() {
    /*
    fetch(api_url + '/users')
        .then(res => res.json())
        .then(users => console.log(users))
     */

    const res = await fetch(api_url + '/users');
    const users = await res.json();
    console.log(users)
}

//loadUsers();


async function loadUserById(id) {
    try {
        const res = await fetch(api_url + '/users/' + id);
        const user = await res.json();
        if(!user || !user.id) {
            console.error('---------- Aucun utilisateur⋅trice à afficher !');
        } else {
            console.log(user)
        }
    } catch (e) {
        console.log('TODO : gérer l\'erreur ');
    }
}

loadUserById(1);
loadUserById(2);
loadUserById(15);
