import '../styles/Presentation.css';
function Presentation() {
    const nom = 'Jean Michel';
    const age = 255;
    const is_logged = true;
    const message = <span>Je suis un span !</span>
    const text = "{Ici je peux utiliser des {} ou des <> sans soucis ! }";
    const url = 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif';
    const image = {
        url: 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif',
        description: 'Miaou',
        titre: 'Je sais pas',
        largeur: 300
    }
    const ma_classe = 'blue';
    const color = 'rebeccapurple';
    const my_style = {
        color,
        border: 'dotted 2px teal',
        borderRadius: '8px' // solution 2
    }

    function getValue() {
        return 'valeur'
    }

    return (
        <main id='Presentation'>
            <h1>Présentation de React</h1>
            <section>
                <h2>JSX : Javascript XML</h2>

                <p >C'est ce qui est utilisé par React pour les templates.</p>
                <p>Ça ressemble à du HTML, tout en respectant les normes XML.</p>
                <ul>
                    <li>Les balises orphelines doivent être fermée </li>
                    <li>Une balise qui n'a pas de contenu doit être orpheline.</li>
                    <li>Les noms de balises HTML doivent être en minuscules.</li>
                    <li>Les noms de balises de composants doivent être en PascalCase.</li>
                </ul>

                <p>Le JSX est plus proche du JS que du HTML, par conséquent : </p>
                <ul>
                    <li>Les mots réservés en JS ne peuvent pas être utilisés à l'intérieur des balises :
                        <ul>
                            <li>class : className</li>
                            <li>for : htmlFor</li>
                        </ul>
                    </li>
                    <li>Les attributs HTML en 2 mots ou plus, doivent être écrits en camelCase : tabIndex</li>
                </ul>

                <p>Un composant est une <b>fonction qui retourne du JSX.</b></p>
                <p>Un composant ne peut retourner qu'un block de JSX ( balise existante, balise vide, composant )</p>

            </section>
            <section>
                <h2>Interpolation</h2>
                <p>C'est le fait de pouvoir exécuter des opérations Javascript</p>
                <p>On met l'opération à exécuter entre accolades.</p>
                {/* Coucou je suis un commentaire */}
                <ul>
                    <li>1 + 1 = { 1 + 1 }</li>
                    <li>Bienvenue {nom} ! :D</li>
                    <li>Vous avez {age} ans</li>
                    <li>Pas les booleans : {is_logged}</li>
                    <li>Du JSX : {message}</li>
                    <li>Accolades: { '{}' }</li>
                    <li>Crochets : { '<>' }</li>
                    <li>{text}</li>
                    <li>{getValue()}</li>
                </ul>
            </section>
            <section>
                <h2>Attribute / Data Binding</h2>
                <figure>
                    <img src={url} alt=''/>
                </figure>
                <figure>
                    <img src={image.url} width={image.largeur} alt={image.description}/>
                    <figcaption>{image.titre}</figcaption>
                </figure>
                <p className={`toto ${ma_classe} encore_une_classe`}>Dans les attributs HTML, on peut utiliser des accolades pour intepréter du JS.</p>
                <p className="toto">On peut également mettre simplement des guillemets ( "", '') et passer notre string en dur.</p>
            </section>
            <section>
                <h2>Le style inline</h2>

                <p style={my_style}>Dans le JSX, l'attribut style accepte un objet.</p>
                <p style={ {
                    fontSize: 20 + 'px',
                    color,
                    fontWeight: 500
                } }>Attention, certaines propriétés sont en plusieurs mots, comme "font-size" : en jsx, ces propriétés seront
                 à mettre entre guillemet : "font-size": 20px; Ou en camelCase : fontSize: 20px. </p>

            </section>
            <section>
                <h2>Le style CSS</h2>

                <p>Le fichier index.css est considéré comme le fichier de style global.</p>
                <p>On peut créer autant de fichier css qu'on le souhaite, il faudra juste les importer
                dans index.tsx, ou App.tsx ou un des composants.
                </p>
                <p>
                    Le style n'est pas scopé par composant : si on souhaite qu'un fichier ne s'applique
                    qu'à un composant précis, il faut jouer avec les selecteurs en donnant une classe / un id
                    à la balise principale du composant, et l'utilisée dans les CSS.
                </p>

            </section>
            <section>
                <h2>Les images</h2>

                <p>Toutes les images passées dans le HTML doivent être rangées dans le dossier public.</p>
                <p>Le chemin passé dans src doit se faire depuis index.html.</p>
                <img src="./images/logo192.png" alt=""/>
                <p>Pour les images intégrées dans le CSS, les images doivent être rangées dans src, et le chemin se fait normalement.</p>
            </section>
        </main>
    );

}

export default Presentation;
