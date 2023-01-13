import axios from "axios";
import {useState} from "react";
import {User} from "../types/User";

function Requests() {
    //let users: any[] = [];
    const [users, setUsers] = useState<User[]>([]); // users: any[] = []
    async function loadUsers() {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        console.log('response : ', response);
        //users = response.data; // User[]
        setUsers(response.data);
        console.log(response.data);
    }

    return (
        <main>
            <h1>Requêtes HTTP</h1>

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
        </main>
    )
}
export default Requests;
