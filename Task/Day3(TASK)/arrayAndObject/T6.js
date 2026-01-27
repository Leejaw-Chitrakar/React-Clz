// 6. From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.

const numbers = [10, 20, 30];

// Use map method to create a new array with updated values
const increasedNumbers = numbers.map(num => num + 5);

console.log("Original Numbers:", numbers);
console.log("Increased Numbers:", increasedNumbers);

// Verify immutability
console.log("Is original array modified?", numbers[0] === 10); // Should be true
