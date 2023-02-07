import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, getNextPage } from '../redux/pokedexSlice';
import Pokedex from '../components/Pokedex';

let flag = false;
function Home() {
  const dispatch = useDispatch();
  const { pokemon, next, total } = useSelector((state) => state);
  useEffect(() => {
    if (!flag) {
      flag = true;
      dispatch(getData(0));
    }
  }, []);

  function getNext() {
    if (pokemon.length === total) return;
    dispatch(getNextPage(next));
  }
  return (
    <div>
      <h1>Home</h1>
      <Pokedex pokemonInfo={pokemon} />
      <button type="button" onClick={getNext}>Load more</button>
    </div>
  );
}

export default Home;
