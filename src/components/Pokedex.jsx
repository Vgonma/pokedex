import React from 'react';
import PropTypes, { shape } from 'prop-types';
import PokeCard from './PokeCard';

function Pokedex({ pokemonInfo }) {
  return (
    <div className="pokedex">
      {pokemonInfo.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

Pokedex.propTypes = {
  pokemonInfo: PropTypes.arrayOf(shape).isRequired,
};
export default Pokedex;
