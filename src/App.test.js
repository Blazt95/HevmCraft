// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HevmCraft title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HevmCraft/i);
    expect(titleElement).toBeInTheDocument();
});
