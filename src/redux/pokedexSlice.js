import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const GET_DATA = 'getPokemon';

// Aditional Action Creators
export const getData = createAsyncThunk(GET_DATA, async () => (
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((data) => ( // Data contains the name and url for each individual pokemon.
      Promise.all(
        // Fetch each individual pokemon data and map it.
        data.results.map(async (pokemon) => ((await fetch(pokemon.url)).json())),
        // Finally return an object like so: {next: <nextPageUrl>, [list, of, pokemon]}
      ).then((pokemonList) => ({ next: data.next, pokemon: [...pokemonList] }))
    ))
));

export

const initialState = {
  loading: false,
  pokemon: [],
  next: '',
};

const geSlice = createSlice({
  name: 'geReducer',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        const prevState = state;
        prevState.loading = false;
        prevState.pokemon = [...action.payload.pokemon];
        prevState.next = action.payload.next;
      })
      .addCase(getData.pending, (state) => {
        const prevState = state;
        prevState.loading = true;
      })
      .addCase(getData.rejected, (state) => {
        const prevState = state;
        prevState.loading = false;
      });
  },
});

export default geSlice.reducer;
export const { actions } = geSlice;
