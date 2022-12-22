function Presentation() {
    const message = "Je suis une variable !";
    const borderColor = "darkslategrey";
    const my_style = {color: 'teal', borderStyle: "solid", borderColor};

    //les noms de propriété en 2 mots ou plus utilisent le kebab-case en css

    const logo = "https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png";

    const image = {
        url: "https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png",
        alt: 'logo react',
        height: 40

    }

    return (
        <div>
          <h1>Présentation</h1>
          <main>
            <article>
                <h2>Les JSX</h2>
                <p>Un composant: C'est un block de code réutilisable</p>
                <p>Il est conseillé en Rect d'utiliser la syntaxe JSX.</p>
                <p>Les JSX ne sont ni une chaine de caractère, ni du HTML</p>
                <p>React va se servir de cette architecture pour récréer le DOM</p>
                <p>Les JSX permettent d'interpoler du code JS à l'interieur des balises</p>
                <p>pour ça, on utilise les accolades</p>
                <div>
                    <ul>
                        <li>Operation: {2 + 2}</li>
                        <li>Commentaire: {/*Coucou! */}</li>
                        <li>Variable : {message}</li>
                        <li>String: {"Coucou"}</li>
                        <li>Template ES6: {`Message : ${message}`}</li>
                        <li>Ecrire de xaractère réservés : {"< >"}</li>
                        <li>Exemple de code: {"<h1>Hello World</h1>"}</li>
                        <li>Accolades: { '{dans du JS}' }</li>
                    </ul>
                </div>
            </article>
            <article>
                <h2>Les attributs</h2>
                <p>En HTML, on a des attributs: class, les id, for, ...</p>
                <p>Certains de ces noms d'attributs sont des mots réservés en JS: </p>
                <ul>
                    <li>class: className</li>
                    <li>for: htmlFor</li>
                    <li>tabindex: tabIndex</li>
                </ul>
                <p>Les attributs HTML peuvent prendre  en valeur une String "", comme dans du HTML 
                    classique, ou une expression JS entre accolades
                </p>
                <li>Classe : <span id='span' className="monspan">Plop</span></li>
                <li>Style: <span style={{color: "red"}}>Styled</span></li>
                <li>Style par variable : <span style={my_style}>Coucou</span></li>
                <li>Image: <img src={logo} height="50" alt=""/></li>
                <li>Image Objet: 
                    <img src={image.url}  alt={image.alt} height={image.height}/>
                </li>
            </article>
          </main>
        </div>
    )
}

export default Presentation

