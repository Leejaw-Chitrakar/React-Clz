// 7. Write a function pipeline(...functions) that chains multiple functions (apply one after another).

function pipeline(...functions) {
  return function(initialValue) {
    return functions.reduce((acc, fn) => fn(acc), initialValue);
  };
}

const double = x => x * 2;
const addTen = x => x + 10;
const process = pipeline(double, addTen);

console.log("Double 5 then add 10:", process(5)); // (5 * 2) + 10 = 20
