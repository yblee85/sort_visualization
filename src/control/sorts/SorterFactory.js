
const SorterFactory = (sortGenerator) => {
    return () => {
        let isCancelled = false;
        let iter;

        const stop = () => {
            isCancelled = true;
            return iter;
        }

        const start = async (initalData, interval_func=()=>{}, runnintItr) => {
            isCancelled = false;    // reset
            iter = runnintItr || sortGenerator(initalData);
            let next;
            while (!(next = iter.next()).done && !isCancelled) {
                let { list=[], swap_indexes=[] } = next.value;
                await interval_func(list, swap_indexes);
            }
        }

        return {
            sortGenerator,
            start, stop,
        };
    };
};


export default SorterFactory;