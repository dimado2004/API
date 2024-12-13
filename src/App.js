// src/App.js
import React from 'react';
import './App.css';
import UserList from './UserList'; // Importer le composant UserList

function App() {
  return (
    <div className="App">
      <h1>Bienvenue dans l'application des utilisateurs</h1>
      <UserList /> {/* Utiliser le composant UserList */}
    </div>
  );
}

export default App;