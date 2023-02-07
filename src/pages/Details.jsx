import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => setPokemon(data));

  useEffect(() => {
    fetchPokemon();
  });

  return (
    <div className="page" id="details">
      <h1 className="capitalize">{`${pokemon.name} #${pokemon.order}`}</h1>
      <div className="sprite">
        <img
          src={
            pokemon.sprites
              ? pokemon.sprites.other['official-artwork'].front_default
              : ''
          }
          alt=""
        />
      </div>
      <div className="info">
        <div className="list-container">
          <h2>Height</h2>
          {pokemon.height
            ? <p className="">{`${pokemon.height * 10} cm`}</p> : ''}
        </div>
        <div className="list-container">
          <h2>Weight</h2>
          {pokemon.weight
            ? <p className="">{`${pokemon.weight / 10} kg`}</p> : ''}
        </div>
        <div className="list-container">
          <h2>Abilities</h2>
          {pokemon.abilities
            ? pokemon.abilities.map((ability) => (
              <div className="badge" key={ability.slot}>
                <p className="capitalize">{ability.ability.name}</p>
                <p>{ability.is_hidden ? '' : 'hidden'}</p>
              </div>
            ))
            : ''}
        </div>
        <div className="list-container">
          <h2>Stats</h2>
          {pokemon.stats
            ? pokemon.stats.map((stat) => (
              <div className="badge" key={stat.stat.name}>
                <p className="capitalize">{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
              </div>
            ))
            : ''}
        </div>
        <div className="list-container">
          <h2>Games</h2>
          {pokemon.game_indices
            ? pokemon.game_indices.map((game) => (
              <div className="badge" key={game.version.name}>
                <p className="capitalize">{game.version.name}</p>
              </div>
            ))
            : ''}
        </div>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Details;
