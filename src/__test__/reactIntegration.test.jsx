import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import store from '../redux/storeConfig';

afterEach(cleanup);
test('Should show head banner', () => {
  const tree = render(<Provider store={store}><Home /></Provider>);
  expect(tree).toMatchSnapshot();
});
test('Should show head banner', () => {
  render(<Provider store={store}><Home /></Provider>);
  expect(screen.getByText(/Pokedex/i)).toBeDefined();
});
test('Should show head banner', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Details />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
