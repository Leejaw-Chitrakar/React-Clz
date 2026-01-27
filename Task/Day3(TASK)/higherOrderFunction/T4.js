// 4. Create a higher-order function logger(fn) that logs "before" and "after" calling fn.

function logger(fn) {
  return function(...args) {
    console.log("before");
    const result = fn(...args);
    console.log("after");
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = logger(add);

console.log("Result:", loggedAdd(2, 3));
