// 2. Create a function operate(arr, fn) that applies fn to each element using map.

function operate(arr, fn) {
  return arr.map(fn);
}

const nums = [1, 2, 3];
const squared = operate(nums, (n) => n * n);
console.log("Original:", nums);
console.log("Squared:", squared);
