/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PokeCard({ pokemon }) {
  const {
    name,
    types,
    sprites,
  } = pokemon;
  return (
    <Link to={`details/${name}`} className="pokecard">
      <div className="img-container">
        <img src={sprites.other['official-artwork'].front_default} alt="" />
      </div>
      <div className="info">
        <h2 className="poke-name uppercase">{name}</h2>
        <div className="capitalize poke-types">{types.map((type) => <p key={type.slot} className={`type ${type.type.name}`}>{type.type.name}</p>)}</div>
      </div>
    </Link>
  );
}

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
export default PokeCard;
