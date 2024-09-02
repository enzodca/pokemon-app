import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPokemon() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numero: '',
    name: '',
    type1: '',
    type2: '',
    generation: '',
    sex: '',
    image: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { type1, type2, ...rest } = formData;
    const newPokemon = { ...rest, type: [type1, type2].filter(Boolean) };
    
    fetch('http://localhost:5000/api/pokemons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPokemon),
    })
      .then(response => {
        if (!response.ok) throw new Error('Échec de l\'ajout du Pokémon');
        return response.json();
      })
      .then(data => {
        alert('Pokémon ajouté avec succès');
        navigate('/');
      })
      .catch(error => setError('Échec de l\'ajout du Pokémon'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>*Numéro de pokedex :</label>
      <input type="number" name="numero" onChange={handleChange} required />

      <label>*Nom :</label>
      <input type="text" name="name" onChange={handleChange} required />

      <label>*Type principal :</label>
      <select name="type1" onChange={handleChange} required>
        <option value="">Sélectionnez un type</option>
        <option value="Acier">Acier</option>
        <option value="Combat">Combat</option>
        <option value="Dragon">Dragon</option>
        <option value="Eau">Eau</option>
        <option value="Électrik">Électrik</option>
        <option value="Fée">Fée</option>
        <option value="Feu">Feu</option>
        <option value="Glace">Glace</option>
        <option value="Insecte">Insecte</option>
        <option value="Normal">Normal</option>
        <option value="Plante">Plante</option>
        <option value="Poison">Poison</option>
        <option value="Psy">Psy</option>
        <option value="Roche">Roche</option>
        <option value="Sol">Sol</option>
        <option value="Spectre">Spectre</option>
        <option value="Ténèbres">Ténèbres</option>
        <option value="Vol">Vol</option>
      </select>

      <label>Second type:</label>
      <select name="type2" onChange={handleChange}>
        <option value="">Sélectionnez un type</option>
        <option value="Acier">Acier</option>
        <option value="Combat">Combat</option>
        <option value="Dragon">Dragon</option>
        <option value="Eau">Eau</option>
        <option value="Électrik">Électrik</option>
        <option value="Fée">Fée</option>
        <option value="Feu">Feu</option>
        <option value="Glace">Glace</option>
        <option value="Insecte">Insecte</option>
        <option value="Normal">Normal</option>
        <option value="Plante">Plante</option>
        <option value="Poison">Poison</option>
        <option value="Psy">Psy</option>
        <option value="Roche">Roche</option>
        <option value="Sol">Sol</option>
        <option value="Spectre">Spectre</option>
        <option value="Ténèbres">Ténèbres</option>
        <option value="Vol">Vol</option>
      </select>

      <label>*Génération :</label>
      <input type="number" name="generation" onChange={handleChange} />

      <label>*Sexe :</label>
      <select name="sex" onChange={handleChange} required>
        <option value="">Sélectionnez un sexe</option>
        <option value="M">M</option>
        <option value="F">F</option>
        <option value="M/F">M/F</option>
        <option value="Inconnu">Inconnu</option>
      </select>

      <label>URL de l'image :</label>
      <input type="text" name="image" onChange={handleChange} />

      <button type="submit">Ajouter le Pokémon</button>
    </form>
  );
}

export default AddPokemon;
