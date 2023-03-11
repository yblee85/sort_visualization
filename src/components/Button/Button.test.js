import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button ', () => {
    render(<Button />);
    // const linkElement = screen.getByText(/learn react/i);
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
    expect(true).toBe(false);
});
