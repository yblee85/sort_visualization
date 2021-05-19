import SorterFactory from './SorterFactory';

const sortGenerator = function* (initalData) {
    let liNumbers = [ ...initalData ];

    yield { list:liNumbers, swap_indexes:[] };

    let isSwapped = false;
    for(let i=liNumbers.length; i>=0; i--) {
        isSwapped = false;
        for(let j=1; j<i; j++) {
            yield { list:liNumbers, swap_indexes:[j-1, j] };
            if(liNumbers[j-1] > liNumbers[j]) {
                [ liNumbers[j-1], liNumbers[j] ] = [ liNumbers[j], liNumbers[j-1] ];
                isSwapped = true;
                yield { list:liNumbers, swap_indexes:[j-1, j] };
            }
        }
        if(!isSwapped) {
            break;
        }
    }
}

const BubbleSorter = SorterFactory(sortGenerator);


export default BubbleSorter;