import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PokemonDetails() {
  const { numero } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/pokemons/${numero}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => setError('Échec de la récupération des données'));
  }, [numero]);

  const handleEditClick = () => {
    navigate(`/edit-pokemon/${numero}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleNextClick = () => {
    navigate(`/pokemon/${pokemon.numero + 1}`);
  };
  
  const handlePrevClick = () => {
    navigate(`/pokemon/${pokemon.numero - 1}`);
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!pokemon) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <button onClick={handleBackClick}>◀ Retour</button>
      <button onClick={handlePrevClick} disabled={pokemon.numero <= 1}>Précédent</button>
      <button onClick={handleNextClick}>Suivant</button> 
      <h1>Détails du Pokémon</h1>
      <p><strong>Numéro :</strong> {pokemon.numero}</p>
      <p><strong>Nom :</strong> {pokemon.name}</p>
      <p><strong>Types :</strong> {pokemon.type.join(', ')}</p>
      <p><strong>Génération :</strong> {pokemon.generation}</p>
      <p><strong>Sexe :</strong> {pokemon.sex}</p>
      <p><strong>Image :</strong> <img src={pokemon.image} alt={pokemon.name} /></p>
      <button onClick={handleEditClick}>Modifier</button>
    </div>
  );
}

export default PokemonDetails;
