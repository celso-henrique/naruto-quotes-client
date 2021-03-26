import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from './App';

const response = { speaker: 'test speaker', quote: 'test quote' };

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders a button and naruto image', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
});

test('calls api on button click and renders it response', async () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);
  const quoteEl = await screen.findByText(/test quote/i);

  expect(quoteEl).toBeInTheDocument();
});
