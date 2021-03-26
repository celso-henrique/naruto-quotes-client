import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders naruto quote and naruto image', () => {
  render(<App />);

  const quoteEl = screen.getByText(/Naruto Uzumaki/i);
  const imageEl = screen.getByRole('img');

  expect(quoteEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
});
