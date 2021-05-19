import SorterFactory from './SorterFactory';

const sortGenerator = function* (initalData) {
    let liNumbers = [ ...initalData ];

    yield { list:liNumbers, swap_indexes:[] };

    for(let i=1; i<liNumbers.length; i++) {
        for(let j=i; j>0; j--) {
            yield { list:liNumbers, swap_indexes:[j-1, j] };
            if(liNumbers[j-1] > liNumbers[j]) {
                [ liNumbers[j-1], liNumbers[j] ] = [ liNumbers[j], liNumbers[j-1] ];
                yield { list:liNumbers, swap_indexes:[j-1, j] };
            } else {
                break;
            }
        }
    }
}

const InsertionSorter = SorterFactory(sortGenerator);

export default InsertionSorter;