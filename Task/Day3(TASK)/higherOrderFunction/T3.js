// 3. Write a function filterBy(arr, conditionFn) that returns filtered array using the provided condition.

function filterBy(arr, conditionFn) {
  return arr.filter(conditionFn);
}

const numbers = [10, 5, 20, 3, 15];
const greaterThan10 = filterBy(numbers, (num) => num > 10);
console.log("Numbers:", numbers);
console.log("Greater than 10:", greaterThan10);
