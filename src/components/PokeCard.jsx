/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PokeCard({ pokemon }) {
  const {
    name,
    types,
    sprites,
  } = pokemon;
  return (
    <div className="pokecard">
      <div className="img-container">
        <img src={sprites.other['official-artwork'].front_default} alt="" />
      </div>
      <div className="info">
        <h3 className="poke-name">{name}</h3>
        <div className="poke-types">{types.map((type) => <p key={type.slot} className="type">{type.type.name}</p>)}</div>
      </div>
    </div>
  );
}

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
export default PokeCard;
