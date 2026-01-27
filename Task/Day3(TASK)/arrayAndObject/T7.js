// 7. Create an object car and add a new property color immutably.

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022
};

// Create a new object with existing properties and new color property
const coloredCar = {
  ...car,
  color: "Silver"
};

console.log("Original Car:", car);
console.log("Colored Car:", coloredCar);

// Verify immutability
console.log("Does original car have color?", car.color !== undefined); // Should be false
