import { num_range } from '../../utils/utilities';
import SorterFactory from './SorterFactory';

const sortGenerator = function* (initalData) {
    let liNumbers = [ ...initalData ];

    yield { list:liNumbers, swap_indexes:[] };

    const mergeSortGen = function* (li, l=0, r=li.length-1) {
        if(l<r) {
            let midIdx = l + parseInt( (r-l)/2 );

            yield* mergeSortGen( li, l, midIdx );
            yield* mergeSortGen( li, midIdx+1, r );
            yield* sortGen(li, l, midIdx, r);
        }
    }

    const sortGen = function* (li, l, m, r) {
        let lIdx = l, rIdx = m+1;
        let newSortedArr = [];
        while(lIdx<=m && rIdx<=r) {
            yield { list:li, swap_indexes: [lIdx, rIdx] };
            if( li[lIdx] < li[rIdx] ) {
                newSortedArr.push(li[lIdx]);
                lIdx++;
            } else {
                newSortedArr.push(li[rIdx]);
                rIdx++;
            }
        }

        while(lIdx<=m) {
            yield { list:li, swap_indexes: [lIdx] };
            newSortedArr.push(li[lIdx]);
            lIdx++;
        }

        while(rIdx<=r) {
            yield { list:li, swap_indexes: [rIdx] };
            newSortedArr.push(li[rIdx]);
            rIdx++;
        }

        li.splice(l, newSortedArr.length, ...newSortedArr);
        let liIdexes = num_range(l, r);

        yield { list:li, swap_indexes: liIdexes };
    }

    
    yield* mergeSortGen(liNumbers);

    yield { list:liNumbers };        
}

const MergeSorter = SorterFactory(sortGenerator);

export default MergeSorter;