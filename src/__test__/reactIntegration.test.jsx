import {
  test,
  expect,
  afterEach,
} from 'vitest';
import {
  cleanup,
  render,
  screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import store from '../redux/storeConfig';

afterEach(cleanup);

test('Should render App', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});

test('Should match Home snapshot', () => {
  const tree = render(<BrowserRouter><Provider store={store}><Home /></Provider></BrowserRouter>);
  expect(tree).toMatchSnapshot();
});

test('Should show head banner', () => {
  render(<BrowserRouter><Provider store={store}><Home /></Provider></BrowserRouter>);
  expect(screen.getByText(/Pokedex/i)).toBeDefined();
});
