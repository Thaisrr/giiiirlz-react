import {FormEvent, useState} from "react";

function ReactivityBis() {
    const [seconds, setSeconds] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [fruits, setFruits] = useState(['Pomme', 'Coing', 'Kiwi']);
    const [book, setBook] = useState(`Les Oubliées du Numérique`);
    const [user, setUser] = useState({username: 'Jean Michel', job: 'Mage Noir', age: 666})
    function launchTimer() {
        let time = 0;
        setIsClicked(true);
        setInterval(() => {
            console.log('in interval');
            setSeconds(++time);
            //setSeconds(prev => prev + 1); // (valeur_actuel) => return nouvelle_valeur
        }, 1000)
    }

    function addFruit(new_fruit: string) {
        /*
        const copy = Array.from(fruits);
        copy.push(new_fruit);
        setFruits(copy);
         */
        /*
        const copy = [...fruits];
        copy.push(new_fruit);
        setFruits(copy);
         */
        /*
        const copy = [...fruits, new_fruit];
        setFruits(copy);
        */
        setFruits([...fruits, new_fruit]);
    }

    function updateBook(event: FormEvent<HTMLInputElement>) {
        const input = event.target as HTMLInputElement;
        console.log(input.value);
        setBook(input.value);
    }

    function updateUser(e: any) {
        e.preventDefault(); // empêche le rechargement automatique de la page
        const form = e.target as HTMLFormElement;
        const username = form.username.value.trim() || user.username ;
        const job = form.job.value.trim() || user.job;
        const age = form.age.value || user.age;

        /*
        const copy = {...user};
        copy.username = username;
        setUser(copy);
         */

      //  const copy = {...user, username: username}
        const copy = {...user, username, job, age};
        setUser(copy);

        // setUser({...user, username});
        form.reset();
    }

    return (
        <main>
            <h1>Réactivité ( le retour )</h1>

            <section>
                <p>Créer un bouton qui lance interval</p>
                <p>Vous êtes sur la page depuis {seconds} secondes</p>
                <p>
                    <button disabled={isClicked} onClick={() => launchTimer()}>Timer</button>
                </p>
            </section>
            <section>
                <h2>Tableau</h2>

                <h3>Mes fruits : </h3>
                <ul>
                    {fruits.map(f => <li key={f}>{f}</li>)}
                </ul>

                <p>
                    {/*  🍋 🍌 🍍 🥭 🍎 🍏 🍐 🍑 🍒 🍓 🫐 🥝 🍅 🫒🥥  */}
                    <button onClick={()=> addFruit('Raisin')}>🍇</button>
                    <button onClick={()=> addFruit('Pastèque')}>🍉</button>
                    <button onClick={() => addFruit('Melon')}>🍈</button>
                    <button onClick={() => setFruits([...fruits, 'Orange'])}>🍊</button>
                </p>
            </section>
            <section>
                <h2>String</h2>

                <p><b>Livre du moment : </b><i>{book}</i></p>

                <fieldset>
                    <legend>Mettre à jour</legend>

                    <label htmlFor='title'>Titre</label>
                    <input onInput={ (e) => updateBook(e) }  id='title' value={book}/>
                </fieldset>
            </section>

            <section>
                <h2>Objet</h2>
                <ul>
                    <li><b>Username:</b> {user.username},</li>
                    <li><b>Job :</b> {user.job},</li>
                    <li><b>Age</b>{user.age}</li>
                </ul>

                <form onSubmit={(e) => updateUser(e)}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input id='username' name='username'/>
                    </div>
                    <div>
                        <label htmlFor='job'>Job</label>
                        <input id='job' name="job"/>
                    </div>
                    <div>
                        <label htmlFor='age'>Age</label>
                        <input id='age' name='age' min={0} type='number'/>
                    </div>
                    <button type="submit">💾</button>
                </form>
            </section>
        </main>
    )
}

export default ReactivityBis;
