// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // Créer l'état pour stocker la liste des utilisateurs
  const [listOfUser, setListOfUser] = useState([]);

  // Utiliser useEffect pour effectuer une requête API lors du montage du composant
  useEffect(() => {
    // Effectuer la requête avec axios pour récupérer les utilisateurs
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Enregistrer les données des utilisateurs dans l'état
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, []); // Le tableau vide [] signifie que l'effet ne sera exécuté qu'une seule fois (au montage du composant)

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      {/* Afficher la liste des utilisateurs */}
      <ul>
        {listOfUser.length > 0 ? (
          listOfUser.map(user => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Téléphone: {user.phone}</p>
              <p>Site Web: {user.website}</p>
            </li>
          ))
        ) : (
          <p>Chargement des utilisateurs...</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;