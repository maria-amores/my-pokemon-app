import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component should', () => {
  test('render the Main Bar', () => {
    render(<App />);
    const header = screen.getByTestId('pokemon-main-header');
    expect(header).toBeInTheDocument();
  });

  test('render the Pokemon Spinner', () => {
    render(<App />);
    const pokemonSpinner = screen.getByTestId('pokemon-spinner-container');
    expect(pokemonSpinner).toBeInTheDocument();
  });
});
