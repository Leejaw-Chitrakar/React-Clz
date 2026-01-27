// 3. Remove the last element from an array immutably.

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.slice(0, -1);

console.log("Original Array:", numbers);
console.log("New Array:", newNumbers);
console.log("Is Original Modified?", numbers.length === 5);
