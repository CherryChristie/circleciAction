import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/hello world/i); // Adjust text as per your app
  expect(headerElement).toBeInTheDocument();
});