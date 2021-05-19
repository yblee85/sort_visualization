import SorterFactory from './SorterFactory';

const sortGenerator = function* (initalData) {
    let liNumbers = [ ...initalData ];

    yield { list:liNumbers, swap_indexes:[] };

    const partitionGen = function* (li, l, r) {
        let m = l + parseInt( (r-l)/2 );
        let pivot = li[m];

        let lIdx = l;
        let rIdx = r;
        
        while(lIdx<=rIdx) {
            yield { list:li, swap_indexes:[] };
            while(li[lIdx] < pivot) {
                lIdx++;
                yield { list:li, swap_indexes:[lIdx] };
            }
            while(li[rIdx] > pivot) {
                rIdx--;
                yield { list:li, swap_indexes:[rIdx] };
            }

            if(lIdx<=rIdx) {
                yield { list:li, swap_indexes:[lIdx, rIdx] };
                [ li[lIdx], li[rIdx] ] = [ li[rIdx], li[lIdx] ] ;
                yield { list:li, swap_indexes:[lIdx, rIdx] };
                lIdx++;
                rIdx--;
            }
        }
        return lIdx;
    }

    const quickSortGen = function* (li, l, r) {
        if(li.length>1) {
            let index = yield* partitionGen(li, l, r);

            if(l < index-1) {
                yield* quickSortGen(li, l, index-1)
            }

            if(index < r) {
                yield* quickSortGen(li, index, r)
            }

        }
    }

    yield* quickSortGen(liNumbers, 0, liNumbers.length-1);
    yield { list:liNumbers };       

}


const QuickSorter = SorterFactory(sortGenerator);

export default QuickSorter;