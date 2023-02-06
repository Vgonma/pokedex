import { configureStore } from '@reduxjs/toolkit';
import geSlice from './pokedexSlice';

const store = configureStore({ reducer: geSlice });

export default store;
