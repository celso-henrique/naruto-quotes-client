import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Test</Button>);

  const buttonEl = screen.getByText(/Test/i);

  expect(buttonEl).toBeInTheDocument();
});
