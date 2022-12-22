import { useState } from "react";
import {Product, ProductObj, ProductTyped} from "../Components/Product"
import {Btn} from "../Components/Buttons"

const Props = () => {

    /*
        Un props est une propriété que l'on passe à un composant (enfant)
        C'est une information qui vient de l'extrieur, du composant, généralement, 
        de son parent 

        Les composants sont comme les fonctions Javascript 
        Ils acceptent des entrées quelconques (appelées "props")
        et renvoient des éléments Réact décrivant ce qui doit apparaître à l'écran
    */

        const prod = "Ecran";
        const products = ['Ordinateur', 'Sourie', 'Clavier'];
        const obj_products = [
            {id : 1, name: 'Pomme', price: 2},
            {id : 2, name: 'Mouchoirs', price: 1},
            {id : 3, name: 'T-shirt', price: 20},
        ]

        const [isLoading, setLoading] = useState(false);

        const testBtn = () => {
            setLoading(true);
            console.log("Coucou");
            setTimeout(() => {
                setLoading(false);
            }, 5000)
        }
    
    //JSX 
    return (
        <>
            <h1>Les Props</h1>
            <main>
                <article>
                    <h2>Fonctionnement</h2>
                    <h3>Simple: </h3>
                    <div  className="grid">
                        <Product name="Tasse" />
                        <Product name={prod} />
                        <Product />
                        {products.map(p => <Product key={p} name={p} />)}
                    </div>
                    <div  className="grid">
                        {Array.isArray(obj_products) && obj_products.map(p => <ProductObj key={p.id} name={p.name} price={p.price} />)}
                        <ProductObj name="café" price="2" currency="$"/>
                        <ProductObj name="café" prix="2" currency="$"/>
                        <ProductObj name="café" price="quatre" currency="$"/>
                    </div>
                </article>
                <article>
                    <h2>Typage</h2>
                    <p>Les props, et la souplesse de JS sur les types peuvent poser problème :</p>
                    <ul>
                        <li>Propriété non passée</li>
                        <li>Mauvais type</li>
                        <li>Erreur sur le nom d'une prop</li>
                    </ul>
                    <p>Pour pallier à ça, il existe une libraierie : prop-types</p>
                    <p><code>npm i prop-types</code></p>
                    <ul>
                        <li>Ne fonction qu'avec les attributs calculés { 'prop={valeur}' }</li>
                        <li>C'est une librairie de développement, qui ne lance que warnings</li>
                    </ul>

                    <h3>Produits typés : </h3>
                    <div className="grid">
                        {obj_products.map(p => <ProductTyped key={p.id} name={p.name} price={p.price} action={testBtn} />)}
                        {/* <ProductTyped name="oij" price='quatre' action={() => alert("cocuou")} /> */}
                        {/* la condition du proptypes affiche juste l'eereur dans la console */}
                    </div>
                </article>
                <article>
                    <h2>Test Bouton: </h2>
                    <Btn action={testBtn} loading={isLoading} txt={'click'} />
                    <Btn action={testBtn} disabled={true} txt={'click'} />
                </article>
            </main>
        </>
    )
}
export default Props;