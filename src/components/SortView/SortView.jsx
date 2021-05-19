import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries} from 'react-vis';

const SortView = ({data}) => {
    return (
        <div >
            <XYPlot data-testid="xy-plot" className="container" height={300} width={300}>
                <VerticalBarSeries colorType='category' colorDomain={[0, 1, 2]} colorRange={['yellow', 'blue', 'red']} data={data} />
            </XYPlot>
        </div>
    );
}

export default SortView;