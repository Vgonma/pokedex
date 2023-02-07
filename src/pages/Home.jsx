import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { getData, getNextPage } from '../redux/pokedexSlice';
import Pokedex from '../components/Pokedex';

let flag = false;
function Home() {
  const dispatch = useDispatch();
  const { pokemon, next, total } = useSelector((state) => state);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!flag) {
      flag = true;
      dispatch(getData(0));
    }
  });

  function getNext() {
    if (pokemon.length === total) {
      setHasMore(false);
      return;
    }
    dispatch(getNextPage(next));
  }
  return (
    <InfiniteScroll
      id="home"
      className="page"
      loadMore={() => getNext()}
      hasMore={hasMore}
      loader="loading..."
    >
      <h1>Pokedex</h1>
      <form>
        <input className="search-bar" type="search" onChange={(e) => setQuery(e.target.value)} />
      </form>
      <Pokedex pokemonInfo={pokemon.filter((item) => (
        query.toLowerCase() === '' ? item : item.name.toLowerCase().includes(query)
      ))}
      />
    </InfiniteScroll>
  );
}

export default Home;
