import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const GET_DATA = 'getPokemon';
const GET_NEXT = 'getNext';

// Aditional Action Creators
export const getData = createAsyncThunk(GET_DATA, async (page = 0) => (
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${10 * page}`)
    .then((response) => response.json())
    .then((data) => ( // Data contains the name and url for each individual pokemon.
      Promise.all(
        // Fetch each individual pokemon data and map it.
        data.results.map(async (pokemon) => ((await fetch(pokemon.url)).json())),
        // Finally return an object like so: {next: <nextPageUrl>, [list, of, pokemon]}
      ).then((pokemonList) => ({ total: data.count, next: data.next, pokemon: [...pokemonList] }))
    ))
));

export const getNextPage = createAsyncThunk(GET_NEXT, async (nextUrl) => (
  fetch(nextUrl)
    .then((response) => response.json())
    .then((data) => ( // Data contains the name and url for each individual pokemon.
      Promise.all(
        // Fetch each individual pokemon data and map it.
        data.results.map(async (pokemon) => ((await fetch(pokemon.url)).json())),
        // Finally return an object like so: {next: <nextPageUrl>, [list, of, pokemon]}
      ).then((pokemonList) => ({ next: data.next, pokemon: [...pokemonList] }))
    ))
));

const initialState = {
  loading: false,
  pokemon: [],
  next: 0,
};

const geSlice = createSlice({
  name: 'geReducer',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        if (!action.payload) return;
        const prevState = state;
        prevState.loading = false;
        prevState.pokemon = [...action.payload.pokemon];
        prevState.next = action.payload.next;
        prevState.total = action.payload.total;
      })
      .addCase(getData.pending, (state) => {
        const prevState = state;
        prevState.loading = true;
      })
      .addCase(getData.rejected, (state) => {
        const prevState = state;
        prevState.loading = false;
      })
      .addCase(getNextPage.fulfilled, (state, action) => {
        const prevState = state;
        prevState.loading = false;
        prevState.pokemon = [...state.pokemon, ...action.payload.pokemon];
        prevState.next = action.payload.next;
      });
  },
});

export default geSlice.reducer;
export const { actions } = geSlice;
