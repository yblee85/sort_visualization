import { render, screen } from '@testing-library/react';
import SortView from './SortView';

const data = [
    {x:1, y:2, color:1},
    {x:2, y:3, color:2},
    {x:3, y:4, color:1},
]

beforeEach(() => {
    // console.log(1);
});

test('renders sortview ', () => {
    const { container } = render(<SortView data={data} />);
    const linkElement = container.querySelectorAll(".rv-xy-plot")[0];
    expect(linkElement).toBeInTheDocument();
});