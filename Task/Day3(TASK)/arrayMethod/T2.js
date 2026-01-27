// 2. Use filter to get all even numbers from [1, 2, 3, 4, 5, 6].

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Original Numbers:", numbers);
console.log("Even Numbers:", evenNumbers);
