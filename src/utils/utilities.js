const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay));
const num_range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

export {
    sleep,
    num_range
}