import { expect, test } from 'vitest';
import reducers from '../redux/pokedexSlice';
import { pokeApiResponse, finalState } from './pokemonData';

test('Initial state', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({ loading: false, pokemon: [], next: 0 });
});

test('Get data fulfilled state', () => {
  const prevState = { loading: false, pokemon: [], next: 0 };
  const action = { type: 'getPokemon/fulfilled', payload: pokeApiResponse };
  const state = reducers(prevState, action);
  expect(state).toEqual(finalState);
});

test('Get data rejected state', () => {
  const prevState = { loading: false, pokemon: [], next: 0 };
  const action = { type: 'getPokemon/rejected' };
  const state = reducers(prevState, action);
  expect(state).toEqual({ loading: false, pokemon: [], next: 0 });
});

test('Get data pending state', () => {
  const prevState = { loading: false, pokemon: [], next: 0 };
  const action = { type: 'getNext/pending' };
  const state = reducers(prevState, action);
  expect(state).toEqual({ loading: true, pokemon: [], next: 0 });
});

test('getNextPage pending state', () => {
  const prevState = { loading: false, pokemon: [], next: 0 };
  const action = { type: 'getNext/pending' };
  const state = reducers(prevState, action);
  expect(state).toEqual({ loading: true, pokemon: [], next: 0 });
});

test('getNextPage rejected state', () => {
  const prevState = { loading: false, pokemon: [], next: 0 };
  const action = { type: 'getPokemon/rejected' };
  const state = reducers(prevState, action);
  expect(state).toEqual({ loading: false, pokemon: [], next: 0 });
});
