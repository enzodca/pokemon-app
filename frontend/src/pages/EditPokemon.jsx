import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditPokemon() {
  const { numero } = useParams();
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

  useEffect(() => {
    fetch(`http://localhost:5000/api/pokemons/${numero}`)
      .then(response => response.json())
      .then(data => setFormData({
        numero: data.numero,
        name: data.name,
        type1: data.type[0] || '',
        type2: data.type[1] || '',
        generation: data.generation,
        sex: data.sex,
        image: data.image,
      }))
      .catch(error => setError('Échec de la récupération des données'));
  }, [numero]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (formData.numero <= 0) {
      setError('Le numéro de Pokédex doit être positif');
      return;
    }
    const { type1, type2, ...rest } = formData;
    const updatedPokemon = { ...rest, type: [type1, type2].filter(Boolean) };

    fetch(`http://localhost:5000/api/pokemons/${numero}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPokemon),
    })
      .then(response => {
        if (!response.ok) throw new Error('Échec de la mise à jour du Pokémon');
        return response.json();
      })
      .then(data => {
        alert('Pokémon mis à jour avec succès');
        navigate(`/pokemon/${data.numero}`); 
      })
      .catch(error => setError('Un Pokémon avec ce numéro ou ce nom existe déjà.'));
  };

  const handleCancel = () => {
    navigate(`/pokemon/${numero}`);
  };

  const handleGenerateImage = () => {
    const numero = formData.numero;
    if (numero) {
      const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}.png`;
      setFormData({ ...formData, image: imageUrl });
    } else {
      setError('Veuillez entrer un numéro de Pokédex valide');
    }
  };

  return (
    <div className="centered-container">
      <div className="centered-content">
        <form onSubmit={handleUpdate}>
          <label>Numéro :</label>
          <input type="number" name="numero" value={formData.numero} onChange={handleChange} required min="1" />

          <label>Nom :</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Type principal :</label>
          <select name="type1" value={formData.type1} onChange={handleChange} required>
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

          <label>Second type (facultatif) :</label>
          <select name="type2" value={formData.type2} onChange={handleChange}>
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

          <label>Génération :</label>
          <input type="number" name="generation" value={formData.generation} onChange={handleChange} min="1" />

          <label>Sexe :</label>
          <select name="sex" value={formData.sex} onChange={handleChange} required>
            <option value="">Sélectionnez un sexe</option>
            <option value="M">M</option>
            <option value="F">F</option>
            <option value="M/F">M/F</option>
            <option value="Inconnu">Inconnu</option>
          </select>
          <br></br>
          <button type="button" onClick={handleGenerateImage}>Générer l'image</button>

          <label>URL de l'image :</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
          <br></br>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Mettre à jour</button>
          <button type="button" onClick={handleCancel}>Annuler</button>
        </form>
        
      </div>
    </div>
  );
}

export default EditPokemon;
