import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ShowForm from '../Components/ShowForm';

function Forms() {

    const [users, setUsers] = useState();
    const api_url = "http://localhost:4000/users";

    const getUsers = async () => {
        const data = await axios.get(api_url);
        setUsers(data.data);
    }

    console.log(users)

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const userNameChange = (e) => {
        setUserName(e.target.value)
    }
    const userEmailChange = (e) => {
        setUserEmail(e.target.value)
    }
    const createUser = () => {
        axios.post(api_url, {
            name: userName,
            email: userEmail,
          }).then(getUsers())
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        createUser();
        setUserName("");
        setUserEmail("");
    }

    useEffect(() => {
        getUsers();
    }, [])

  return (
    <div>
        <h2>Forms</h2>
        <div className='grid'>
            {users && users.map((user) => <div className='card' key={user.id}><p>{user.name}</p><NavLink to={`/user/${user.id}`}>Profil</NavLink></div>)}
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='name' id='name' value={userName} onChange={userNameChange}></input>
                <input placeholder='email' id='email' value={userEmail} onChange={userEmailChange}></input>
                <button type='submit'>Ajouter</button>
            </form>
        </div>
        <ShowForm create={createUser}/>
    </div>
  )
}

export default Forms


//--------code formateur------------

// const Forms = () => {

//     const[users, setUsers] = useState([]);
//     const api_url = 'http://localhost:4100/users';

//     const getUsers = () => {
//         axios.get(api_url)
//         .then(res => setUsers(res.data))
//     }

//     const createUser = (user) => {
//         axios.post(api_url, user)   //on persist notre user
//         .then(() => getUsers())  //On relance la requête pour afficher notre nouveau user
//         .catch(err => {
//             console.error(err);
//             alert('Nope !');
//         })
//     }

//     useEffect(() => {
//         getUsers();
//     }, []);

//     //Gestion de la soumission du formulaire 
//     const handleSubmit = (e) => {
//         console.log(e);
//         e.preventDefault();
//         const form = e.target; //un tableau avec les inputs 
//         const name = form[0].value; //valeur du 1er input du form 
//         const email = form[1].value;
//         const user = {name, email};  //equivalent : {name: name, email:email}
//         createUser(user);
//         form[0].value = '';
//         form[1].value = '';

//     }

//     return (
//         <>
//             <h1>Formulaires</h1>
//             <main>
//                 <h2>Users</h2>
//                 <div className="grid">
//                     {
//                         users.map(u => (
//                                 <div key={u.id} className="card">
//                                     <h3>{u.name}</h3>
//                                     {/* <p>
//                                         <NavLink to=></NavLink>
//                                     </p> */}
//                                 </div>
//                             ))
//                     }
//                 </div>

//                 <h2>Form : </h2>
//                 <fieldset>
//                     <legend>Nouvel.le Utilisateur.trice</legend>
//                     <form onSubmit = {handleSubmit}>
//                         <p>
//                             <label htmlFor="name">Nom</label>
//                             <input id="name"/>
//                         </p>
//                         <p>
//                             <label htmlFor="email">Email</label>
//                             <input id="email"/>
//                         </p>
//                         <p>
//                             <button type = "submit">Créer</button>
//                         </p>
//                     </form>
//                 </fieldset>
//             </main>
//         </>
//     )

// }
// export default Forms;