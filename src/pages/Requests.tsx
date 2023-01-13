import axios from "axios";
import {useEffect, useState} from "react";
import {User} from "../types/User";

function Requests() {
    //let users: any[] = [];
    const [users, setUsers] = useState<User[]>([]); // users: any[] = []
    const [counter, setCounter] = useState(0);
    let static_counter = 0;
    async function loadUsers() {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        console.log('response : ', response);
        //users = response.data; // User[]
        setUsers(response.data);
        console.log(response.data);
    }

    console.log('Appel de la fonction Requests');

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

                <div className='grid'>
                    {
                        users.map(u => (
                            <div className='card' key={u.id}>
                                <h3>{u.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section>
                <h2>Joke</h2>

                <p>....</p>

            </section>
        </main>
    )
}
export default Requests;
