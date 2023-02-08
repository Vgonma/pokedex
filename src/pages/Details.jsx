import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import arrow from '../assets/up-arrow.png';

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
      <Link to="/" className="back-arrow">
        <button type="button"><img src={arrow} alt="back to top" /></button>
      </Link>
      <h1 id="poke-details-name" className="capitalize page-title">{`${pokemon.name} #${pokemon.order}`}</h1>
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
      <div className="details-info">
        <div className="list-container">
          <div className="height-weight">
            <h2>Height</h2>
            {pokemon.height
              ? <p className="">{`${pokemon.height * 10} cm`}</p> : ''}
            <h2>Weight</h2>
            {pokemon.weight
              ? <p className="">{`${pokemon.weight / 10} kg`}</p> : ''}
          </div>
        </div>

        <div className="list-container">
          <h2>Abilities</h2>
          {pokemon.abilities
            ? pokemon.abilities.map((ability) => (
              <p key={ability.ability.name} className="capitalize">{ability.ability.name}</p>
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
              <div className="" key={game.version.name}>
                <p className="capitalize">{game.version.name}</p>
              </div>
            ))
            : ''}
        </div>

      </div>
    </div>
  );
}

export default Details;
