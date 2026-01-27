// 3. Use reduce to calculate the sum of [10, 20, 30, 40].

const numbers = [10, 20, 30, 40];

const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Numbers:", numbers);
console.log("Total Sum:", totalSum);
