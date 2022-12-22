import React from 'react'

function Static() {
    let message = "Les JSX servent à interpreter du Javascript "
    +"entre {}, on peut donc y manipuler des données.";

const fruits = ['Pomme', 'Poire', 'Banane', 'Ananas'];

const fruits_bis = [
    {id: 1, name: 'Pomme', price: 2.9}, 
    {id: 2, name: 'Mangue', price: 2}, 
    {id: 3, name: 'Clémentine', price: 3.1}, 
]

const isLogged = true; 
const name = "Jane Doe";

const conditionalDisplay = () => {
    if(isLogged) {
        return <p>Connecté.e (ce message est affiché par une fonction)</p>
    } else {
        return <p>Pas Connecté.e (ce message est affiché par une fonction)</p>
    }
}

return(
    <>
        <h1>Données Statiques</h1>
        <main>
            <div className="Card">{message}</div>
            <article>
                <h2>Les listes</h2>
                <ul>
                    {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
                </ul>
                <div className="grid">
                    {fruits_bis.map(f => (
                        <div className='card' key={f.id}>{f.name}, {f.price}</div>
                    ))}
                </div>
            </article>
            <article>
                    <h2>Affichage conditionnel</h2>
                    <p>Plusieurs solutions possibles : Soit directement dans le JSX?
                        soit via une fonction.
                    </p>
                    <section>
                        <h3>Exemple JSX "Si...Sinon...."</h3>
                        {/*Afficher le nom de l'utilisteur si connecté (isLogged),
                        ou alors écrire "Anonyme" */}
                        <p>Bonjour {(isLogged) ? name : 'Anonyme'}</p>

                        {
                            (fruits.length > 0) ? 
                            (
                                <ul>
                                    {fruits.map(f => <li key={f+10}>{f}</li>)}
                                </ul>
                            ) : 
                            (<p>Pas de fruits...</p>)
                        }
                    </section>
                    <section>
                        <h3>JSX: Si ... alors</h3>
                        {isLogged && <p>Vous etes connecté</p>}
                    </section>
                    <section>
                        <h3>En focntion</h3>
                        {conditionalDisplay()}
                    </section>
                </article>
        </main>
    </>
)
}

export default Static