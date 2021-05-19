import { render, screen } from '@testing-library/react';
import Header from './Header';


beforeEach(() => {
    console.log(1);
});

test('renders header ', () => {
    render(<Header />);
    const linkElement = screen.getByText(/bubble/i);
    // const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
});
