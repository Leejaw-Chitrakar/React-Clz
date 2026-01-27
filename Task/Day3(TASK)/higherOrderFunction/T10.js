// 10. Create a higher-order function memoize(fn) that caches results of expensive pure functions.

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache...");
      return cache[key];
    }
    console.log("Calculating...");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowSquare = (n) => n * n;
const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5)); 
console.log(memoizedSquare(10));
