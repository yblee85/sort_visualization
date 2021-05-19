import SorterFactory from './SorterFactory';

const sortGenerator = function* (initalData) {
    let liNumbers = [ ...initalData ];

    yield { list:liNumbers, swap_indexes:[] };

    for(let i=0; i<liNumbers.length-1; i++) {
        let minIdx = i;
        for(let j=i+1; j<liNumbers.length; j++) {
            yield { list:liNumbers, swap_indexes:[i, j] };
            if(liNumbers[minIdx] > liNumbers[j]) {
                minIdx = j;
            }
        }
        [liNumbers[i], liNumbers[minIdx]] = [liNumbers[minIdx], liNumbers[i]];
        yield { list:liNumbers, swap_indexes:[i, minIdx] };
    }
}

const SelectionSorter = SorterFactory(sortGenerator);

export default SelectionSorter;