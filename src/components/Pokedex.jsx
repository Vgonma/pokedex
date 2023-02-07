import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';

function Pokedex({ pokemonInfo }) {
  return (
    <div>
      {pokemonInfo.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

Pokedex.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemonInfo: PropTypes.array.isRequired,
};
export default Pokedex;
