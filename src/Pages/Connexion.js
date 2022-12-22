import React, {useState} from 'react';
import {Btn} from "../Components/Buttons"

function Connexion() {
    const [isLogged, updateLog] = useState(false);
    const actionBtn = () => {
        updateLog(!isLogged);
    }
    const texte = !isLogged ? 'connexion' : 'deconnexion';
    
  return (
    <div>
        <h1>Connexion</h1>
        <div className='grid'>
            <Btn action={actionBtn} txt={texte}/>
        </div>
        {isLogged 
        ? <p>Vous etes connecté</p>
        : <p>Vous n'etes pas conncté</p> }
    </div>
  )
}

export default Connexion