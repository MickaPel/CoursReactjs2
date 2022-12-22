import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UseParams() {
  const {id} = useParams();

  const [users, setUsers] = useState();
  const api_url = "http://localhost:4000/users";

    const getUsers = async () => {
        const data = await axios.get(`${api_url}/${id}`);
        setUsers(data.data);
    }
  
    useEffect(() => {
      getUsers();
  }, [])

  return (
    <div>
      {users && users.email}
    </div>
  )
}

export default UseParams



//-----------------code formateur-----------------

// const UserDetails = () => {

//   /*
//       Le hook useParams() permet de récueprer les paramètres de la route 
//       Permet d'acceder aux paraètres de l'URL courante
//       Le Hook useParam() retourne un objet avec une clé (ex: id) et sa valeur (ex : 3)
//       Dans notre exemple on souhaite afficher le profile du user 
//       hhtp://localhost:3000/3 : 
//           - On va recuperer la route (url)
//           - On recupère la clé
//   */
//  const params = useParams();  //Recupère un objet avec les paramètres 
//  const id = params.id; // On recupère la clé 

//  const[user, setUser] = useState({});

//  //On va utiliser la clé pour récuperer un user 
//   const getUser = async () => {
//       const {data} = await axios.get('http://localhost:4100/users/' + id);
//       setUser(data);
//   }

//   useEffect(() => {
//       getUser();
//   }, [])

//   //JSX
//   return (
//      <>
//      {
//           (user) ? 
//           <div>
//               <h1>Profil de {user.name}</h1>
//               <p>Email : {user.email}</p>
//           </div>
//           :
//           <p>Nope, rien à voir ici!!</p>
//      }
//      </> 
//   )
// }
// export default UserDetails;