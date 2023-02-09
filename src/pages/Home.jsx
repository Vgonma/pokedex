import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RxGear } from 'react-icons/Rx';
import { BsMic } from 'react-icons/bs';
import { getData, getNextPage } from '../redux/pokedexSlice';
import Pokedex from '../components/Pokedex';
import arrow from '../assets/up-arrow.png';

let flag = false;
let loadedAll = false;
function Home() {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state);
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (!flag) {
      flag = true;
      dispatch(getData(0));
    }
  });

  function getNext() {
    if (!loadedAll) {
      loadedAll = true;
      dispatch(getNextPage());
    }
  }
  return (
    <div
      id="home"
      className="page"
    >
      <div className="head-banner">
        <NavLink to="/">
          <h1 className="page-title">Pokedex</h1>
        </NavLink>
        <form className="search-form">
          <input className="search-bar" type="search" onChange={(e) => { setQuery(e.target.value); getNext(); }} placeholder="Pikachu" />
        </form>
        <div className="icons">
          <BsMic className="icon" />
          <RxGear className="icon" />
        </div>
      </div>
      <Pokedex pokemonInfo={pokemon.filter((item) => (
        query.toLowerCase() === '' ? item : item.name.toLowerCase().includes(query)
      ))}
      />
      <button className="load-all" type="button" onClick={getNext}>Load all</button>
      <a href="#home" className="top-arrow">
        <button type="button"><img src={arrow} alt="back to top" /></button>
      </a>
    </div>
  );
}

export default Home;
