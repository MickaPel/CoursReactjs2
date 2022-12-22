import React, {useState, useEffect} from 'react'

function Effects() {

    /*
        Le hook d'effet permet l'execution d'effetsde bord dans les fonctions composants: 
        Charger des données depuis un serveur distant, s'abonner, déclencher une alerte à 
        chaque fois que votre panier est mis à jour, sauvegarder ce panier à chaque mise 
        à jour,  modifier manuellement  le DOM sont des exemples d'effets de bord. 

        Ce sont des actions qui ne font pas partie du return, qui interviennent après que 
        React ait mis à jour le DOM
    */

    const [counter, setCounter] = useState(0);
    const [isLogged, setLog] = useState(false);
    let toto = 'toto';

    const increment = () => {
        setCounter(counter + 1);
        toto = 'Not toto';
        console.warn("in increment : ", toto);
    }

    //agit a chaque modif
    //L'effet ici met a jour le counter qui s'incrémente
    useEffect(() => {
        console.log("(first) counter a été incrémenté, new value : ", counter);
    },);

    //useeffect se lancera que lorsque ce sont ces valeurs qui sont modifiés
    //on peut passer un deuxieme param a la fonction useEffect:
    //un tableau contenant les données a surveiller
    useEffect(() => {
        console.warn("(second) counter a été incrémenté, new value : ", counter);
    }, [counter]);

    //3- useeffect: pour couper les connexions a des flux, des websockets...
    //
    useEffect(() => {
        let seconds = 0;
        console.log("component a été rendu depuis : ");
        let intervale = setInterval(() => {
            seconds++;
            console.log(`${seconds} seconds`)
        }, 1000);
        return () => {
            //couper tous les flux
            clearInterval(intervale);
        }
    })


  return (
    <>
        <h1>Effects</h1>
        <main>
            <article>
                <h2>Présentation : useEffect</h2>
                <p>Compteur : {counter}</p>
                <p>
                    <button onClick={increment}>++</button>
                    <button onClick={() => setLog(!isLogged)}>
                        {(isLogged) ? 'logout' : 'login'}
                    </button>
                </p>
                <p>useEffect permet d'agir lorsque le Dom est mis a jour / rendu</p>
                <p>Ila git a la création du composant, au 1er rendu, et chacunes des modifs</p>
                <p>On se sert de useEffect pour:</p>
                    <ul>
                        <li>Faire des requetes a la création du composant</li>
                        <li>Agir a la modification d'une valeur précise</li>
                        <li>Agir a chaque modif</li>
                        <li>Pour couper les connexions a des flux, des websockets, des observables, ...</li>
                    </ul>
            </article>
        </main>
    </>
  )
}

export default Effects