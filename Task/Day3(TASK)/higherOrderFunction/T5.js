// 5. Write a function createAdder(x) that returns a new function adding x to its argument.

function createAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log("3 + 5 =", add5(3));
console.log("10 + 5 =", add5(10));
