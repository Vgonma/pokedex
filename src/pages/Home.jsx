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
  useEffect(() => {
    if (!flag) {
      flag = true;
      dispatch(getData(0));
    }
  }, []);

  function getNext() {
    if (pokemon.length === total) {
      setHasMore(false);
      return;
    }
    dispatch(getNextPage(next));
  }
  return (
    <div>
      <InfiniteScroll
        loadMore={() => getNext()}
        hasMore={hasMore}
      >
        <h1>Home</h1>
        <Pokedex pokemonInfo={pokemon} />
      </InfiniteScroll>
    </div>
  );
}

export default Home;
