import { render, screen } from '@testing-library/react';
import { Quotes } from './Quotes';

test('renders naruto quote and a button', () => {
  render(<Quotes />);

  const quoteEl = screen.getByText(/Naruto Uzumaki/i);
  const buttonEl = screen.getByRole('button');

  expect(quoteEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});
