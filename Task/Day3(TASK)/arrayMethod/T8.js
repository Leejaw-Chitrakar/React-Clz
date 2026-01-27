// 8. Use reduce to find the maximum value in an array of numbers.

const numbers = [10, 5, 20, 8, 15];

const maxNumber = numbers.reduce((max, current) => current > max ? current : max, numbers[0]);

console.log("Numbers:", numbers);
console.log("Maximum Value:", maxNumber);
