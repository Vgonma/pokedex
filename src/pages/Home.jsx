import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/pokedexSlice';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(1, 'a'));
  }, [dispatch]);

  return (
    <div>Home</div>
  );
}

export default Home;
