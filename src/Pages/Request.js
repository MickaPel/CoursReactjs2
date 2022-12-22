import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Request() {

  const joke_api = "https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode";

  const [joke, setJoke] = useState("");
  const [character, setCharacter] = useState({});
  const swap_api = "https://swapi.dev/api/people/";
  const [id, setId] = useState(1);
  const [characters, setCharacters] = useState({});
  const swapi_people = "https://swapi.dev/api/people/";

  const getJoke = async () => {
    //comme data est un objet on le met entre accolades {}
    const {data} = await axios.get(joke_api);
    setJoke(data.joke);
  }

  useEffect(() => {
    getJoke()
  }, []); //[] signifie qu'il n'ya aucune valeur a modifier, et se recharge qu'une seule fois


  // const getCharacter = async () => {
  //   const {data} = await axios.get(swap_api + id);
  //   setCharacter(data); 
  // }

  // useEffect(() => {
  //   getCharacter()
  // }, [id]);

  //--------------ou-----------------

  useEffect(() => {
    const getCharacter = async () => {
      const {data} = await axios.get(swap_api + id);
      setCharacter(data); 
    }
    getCharacter()
  }, [id]);

  const getCharacters = () => {
    axios.get(swapi_people)
    .then(res => setCharacters(res.data))
  }

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <>
      <h1>Request</h1>
      <main>
        <h2>Présentation</h2>
        <p>pour commencer, il faut installer axios</p>
        <p><code>npm i axios</code></p>
        <div className='card'>{joke}</div>
        <p>Pour recuperer 1 fois des données dans une api, au moment du chargement du composant,
          on passe notre requete dans useeffect, et en second parametre de useeffect, on passe un array vide
        </p>
        <p>Ainsi, on précise a useeffect qu'il n'a aucune valeur a survveiller et s'executera qu'au chargement</p>

        <h2>Avec filtre dynamique: </h2>
        <p><button disabled={id <= 1} onClick={() => setId(id - 1)}>Précedant</button></p>
        <p><button disabled={id > characters.count} onClick={() => setId(id + 1 )}>Suivant</button></p>
        <div className='card'>
          <p>Name: {character.name}</p>
          <p>Birth: {character.birth_year}</p>
          <p>Height: {character.height}</p>
        </div>
      </main>
    </>
  )
}

export default Request