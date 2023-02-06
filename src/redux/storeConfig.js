import { configureStore } from '@reduxjs/toolkit';
import geSlice from './geSlice';

const store = configureStore({ reducer: geSlice });

export default store;
