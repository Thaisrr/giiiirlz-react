function Instructions() {
    const is_logged = true;
    const nom= 'Jean Michel';
    const role : 'USER' | 'ADMIN' | 'GODDESS' = 'USER'; // 'USER' | 'ADMIN' | 'GODDESS'
    const books = [`Frankenstein`, `La Croisée des Mondes`, `L'Assassin Royal`, `Tchoupi à la plage`];
    const flowers = [
        <li key='a'>Tulipe</li>,
        <li key='b'>Jonquille</li>,
        <li key='c'>Pavot</li>,
    ]

    function getBooks() {
        return books.map(b => <li key={b + 'l1'}>{b}</li>);
    }

    function Books(){
        return (
            <ul>
                { books.map(b => <li key={`${b}l2`}>{b}</li>)}
            </ul>
        )
    }
    function getStatus() {
        switch (role) {
            case "USER":
                return <p>Looser...</p>;
            case "ADMIN":
                return <p>Pas mal</p>;
            case "GODDESS":
                return <p>Vous êtes tout⋅e puissant⋅e</p>;
            default:
                return <p>Mais qui êtes vous ? </p>;
        }
    }

    function Status() {
        switch (role) {
            case "USER":
                return <p>Looser...</p>;
            case "ADMIN":
                return <p>Pas mal</p>;
            case "GODDESS":
                return <p>Vous êtes tout⋅e puissant⋅e</p>;
            default:
                return <p>Mais qui êtes vous ? </p>;
        }
    }

    return (
        <main>
            <h1>Instructions</h1>

            <section>
                <h2>Conditions</h2>

                <p>En JSX, on peut interpréter n'importe quelle expression JS qui retourne une valeur</p>

                <article>
                    <h3>Si... Sinon...</h3>

                    <p>Bienvenue {(is_logged)? nom : 'Anonyme'}</p>

                    {(is_logged)?
                        (
                            <div>
                                <p>Tout est OK, vous êtes connecté⋅es !</p>
                                <p>Voir mon profil...</p>
                            </div>
                        ) : (
                            <div>
                                <p>Il faut se connecter ! 😡 😡 😡 </p>
                                <button>Se connecter !!!!</button>
                            </div>
                        )
                    }
                </article>
                <article>
                    <h3>Si... alors... ( sinon rien )</h3>

                    <p>Solution 1 : ternaire, qui retourne null</p>
                    { (is_logged)? <p>Vous êtes connecté⋅e</p> : null }

                    <p>Solution 2 : expression conditionnelle</p>
                    <p>condition && valeur si condition vraie</p>
                    { is_logged && <p>Vous êtes connecté⋅e ! </p>}
                    { !is_logged && <p>Vous n'êtes pas connecté⋅e ! </p>}

                    <p>condition || valeur si condition fausse</p>
                    { is_logged || <p>Vous n'êtes pas connecté⋅e ! </p>}

                </article>
                <article>
                    <h3>Fonction</h3>
                    {getStatus()}
                    <Status/>
                </article>

            </section>
            <section>
                <h2>Les listes</h2>

                <ul>
                    {flowers}
                </ul>

                <ul>{getBooks()}</ul>

                <Books/>

                <ul>
                    {books.map(b => <li key={b + 'l3'}>{b}</li>)}
                </ul>

            </section>
        </main>



    )
}
export default Instructions;
