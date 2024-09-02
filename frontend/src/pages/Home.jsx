import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('numero');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetch(`http://localhost:5000/api/pokemons?search=${search}&sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`)
      .then(response => response.json())
      .then(data => setPokemons(data));
  }, [search, sortBy, order, page]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/totalpokemons`)
      .then(response => response.json())
      .then(data => setTotalPokemons(data))
      .catch(error => console.error('Erreur lors de la récupération des Pokémons:', error));
  }, []);
  return (
    <div className="centered-container">
      <div className="home-page">
        <div>
          <input type="text" placeholder="Rechercher..." onChange={(e) => setSearch(e.target.value)} className='recherche'/>
          <button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
            Trier par {sortBy === 'numero' ? 'Numéro Pokédex' : 'Alphabétique'} ({order === 'asc' ? 'ascendant' : 'descendant'})
          </button>
          <button onClick={() => setSortBy(sortBy === 'numero' ? 'name' : 'numero')}>
            Changer le critère de tri
          </button>

          <div>
            <Link to="/add-pokemon">
              <button type="button">Ajouter un Pokémon</button>
            </Link>
            <h1>Liste des Pokémons</h1>
          </div>

          <ul>
            {pokemons.map(pokemon => (
              <li key={pokemon.numero}>
                <Link to={`/pokemon/${pokemon.numero}`}>{pokemon.name}<br></br></Link>
              </li>
            ))}
          </ul>
           

          <button onClick={() => setPage(page > 1 ? page - 1 : 1)} disabled={page === 1}>Précédent</button>
          <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(totalPokemons.length/limit) }>Suivant</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
