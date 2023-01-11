import { useState } from "react";

function Reactivity() {
    let compteur = 10;

    // [valeur, function de modification ]
    const state = useState(100); // Hook de React - paramétre : valeur par défaut
    const count_2 = state[0]; // L'état actuel de la valeur de la valeur, ici 10 au départ -> // getter
    const setCount2 = state[1]; // Fonction qui permet de mettre à jour le state -> un setter pour le state

    // Decomposition
    const [count, setCount] = useState(200);
    // count -> useState(200)[0]
    // setCount -> useState(200)[1]

    const fruits = ['Pomme', 'Poire', 'Abricot'];
    const [f1, f2] = fruits;
    // f1 -> Pomme
    // f2 -> Poire


    const [message, setMessage] = useState('Hello World');

    const [username, setUsername] = useState('');


    let [isLogged, setIsLogged] = useState(false);


    function handleClick(e: any) {
        console.log(e);
    }

    function displayMessage(text: string) {
        console.log(text);
     
    }

    function increment() {
        compteur++;
        console.log('Compteur incrémenté : ', compteur);
    }

    function increment2() {
        const new_value = count_2 + 1;
        setCount2(new_value);
        console.log('[2] Compteur incrémenté ', count_2);
        
    }

    function getAPIUsername() {
        setTimeout(() => {
            const api_username = 'Toto';
            setUsername(api_username);
        }, 2000)
    }



    return (
        <main>
            <h1>La Réactivité</h1>

            <section>
                <h2>Evenements</h2>

                <p>En React, on retrouve les mêmes événements qu'en HTML : onClick, onSubmit, onMouseOver, ...</p>
                <p>Ces éléments s'appellent en camelCase.</p>
                <p>Ils attendent en valeur une fonction / une callback, qui peut récupérer en paramétre, l'event.</p>

                <p>4 boutons qui font la même chose : </p>

                <button onClick={(e) => console.log(e)}>Coucou</button>
                <button onClick={console.log}>Coucou</button>
                <button onClick={(e) => handleClick(e)}>Coucou</button>
                <button onClick={handleClick}>Coucou</button>

                <button onClick={() => console.log('Hello')}>Hello</button>
                <button onClick={() => console.log('Holà')}>Holà</button>

                <button onClick={() => displayMessage('Bonjour')}>Bonjour</button>

            </section>

            <section>
                <h2>Compteur</h2>

                <p>Créer une variable "compteur", initialisée à 0.</p>
                <p>Créer une fonction d'incrémentation, qui incrément le compteur, et affiche
                    sa nouvelle valeur en console.log
                </p>
                <p>Créer un bouton pour appeler le compteur.</p>
                <p>Afficher le compteur dans le HTML : que remarquez-vous ? </p>

                <h3>Compteur : {compteur}</h3>

                <p>
                    <button onClick={() => increment()}>Incrémenter</button>
                </p>
            </section>

            <section>
                <h2>UseState</h2>

                <p>Compteur 2 : {count_2}</p>

                <p><button onClick={() => increment2()}>Incrémenter</button></p>

                <h3>Message : </h3>
                <p>{message}</p>
                <p>
                    <button onClick={() => setMessage('Bonjour le monde')}>French</button>
                    <button onClick={() => setMessage('Holà Mundo')}>Spanish</button>
                    <button onClick={() => setMessage('Hello World')}>English</button>
                </p>

                <div>
                    {username? <h3>Bonjour {username}</h3> : <p>Chargement en cours...</p>}

                    <button onClick={() => getAPIUsername()}>API CALL</button>
                </div>
            </section>
            <section>
                <b>ATTENTION </b> il ne faut pas modifier la valeur fournie par le useState.
            </section>

            <section style={{backgroundColor: (isLogged)? 'green' : 'red'}}>
                {   isLogged? <p>Vous êtes connecté⋅e</p> : <p>Veuillez vous connecter !</p> }

                <p>
                    <button onClick={() => {isLogged = true}}>[Bug] {isLogged? 'Déconnexion' : 'Connexion'}</button>
                    <button onClick={() => setIsLogged( !isLogged )}>{isLogged? 'Déconnexion' : 'Connexion'}</button>
                </p>
            </section>
        </main>
    )
}
export default Reactivity;
