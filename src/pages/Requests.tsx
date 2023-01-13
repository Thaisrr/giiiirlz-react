import axios from "axios";
import {useEffect, useState} from "react";
import {User} from "../types/User";
import JokeService from "../utils/joke.service";
import UserCard from "../components/UserCard";

function Requests() {
    //let users: any[] = [];
    const [users, setUsers] = useState<User[]>([]); // users: any[] = []
    const [counter, setCounter] = useState(0);
    const [singleUser, setSingleUser] = useState<User>();
    let static_counter = 0;
    async function loadUsers() {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        console.log('response : ', response);
        //users = response.data; // User[]
        setUsers(response.data);
        console.log(response.data);
    }

    console.log('Appel de la fonction Requests');

    async function getOneUser() {
        const res = await axios.get<User>('https://jsonplaceholder.typicode.com/users/1')
        setSingleUser(res.data);
    }
    useEffect(() => {
           getOneUser();
    }, [])



    /*
    useEffect -> permet d'effectuer une action lors d'un moment du cycle de vie du composant ( création, modification, destruction )
    => Il s'effectue toujours 1 fois à la création du composant
    => Puis à chaque modification des données passées dans le tableau de dépendance ( 2eme paramétre du useEffect
    useEffet( callback, tableau de dépendances )
     */

    // Ne s'effectue uniquement à la création du composant
    useEffect(() => {
        console.log('Coucou from use effect');
        // Pour faire ce qu'on veut 1 fois à la création du composant
        loadUsers();
    }, []);

    useEffect(() => {
        console.log('Counter has been updated')
    }, [counter])

    useEffect(() => {
        console.log('Users updated');
    }, [users]);

    useEffect(() => {
        console.log('Counter OR Users updated')
    }, [counter, users])

    useEffect(() => {
        console.log('Static counter updated')
    }, [static_counter])

    /*
    A retenir :
    - UseEffect avec dépendances vides []  => Pour les actions à faire 1 fois
    - UseEffect avec une valeur surveillée par React ( d'un useState par exemple ) => pour agir quand la valeur est modifiée
    -> Pas d'effet pour les valeurs non surveillées par React ( const bidule = 'value' ) => que des valeurs de Hook
     */

    /******** Exercice Joke *******************/

    const [joke, setJoke] = useState<string>();
    async function getJoke() {
      //  const url = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode&category=programming';
       // const response = await axios.get<{joke: string}>(url);
       // setJoke(response.data.joke);
        const joke = await JokeService.getRandom();
        setJoke(joke);
    }

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <main>
            <h1>Requêtes HTTP</h1>

            <p>Compteur <b>{counter}</b> <button onClick={() => setCounter(counter + 1)}>+</button></p>
            <p><button onClick={() => {
                static_counter++;
                console.log('Static Counter ', static_counter)
            }
            }>Increment static counter</button></p>

            <section>
                <h2>Utilisateur⋅trices</h2>

                <p><button onClick={() => loadUsers()}>Charger les données</button></p>

                <UserCard user={ {id: 123, name: 'Toto', email: 'toto.mail.fr', username: 'toto'} } />

                {singleUser && <UserCard user={singleUser} />}


                <div className='grid'>
                    {
                        users.map(u => (
                            <UserCard user={u} key={u.id}/>
                        ))
                    }
                </div>
            </section>
            <section>
                <h2>Joke</h2>
                {/*
                1. Fonction -> console.('requete')
                2. Appeler la fonction à la création du composant
                3. Dans la fonction, faire la requête -> console.log(reponse)
                4. Console.log de juste la blague -
                5. Enregistrer la blague dans une variable pour mettre à jour le JSX et l'afficher
                */}

                <p>{joke}</p>

                <p>
                    <button onClick={() => getJoke()}>Reload</button>
                </p>

            </section>
        </main>
    )
}
export default Requests;
