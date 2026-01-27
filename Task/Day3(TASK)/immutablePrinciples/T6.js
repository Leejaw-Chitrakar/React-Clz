// 6. Add a new key-value pair to an object immutably.

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

const updatedCar = {
  ...car,
  color: "Blue"
};

console.log("Original Car:", car);
console.log("Updated Car:", updatedCar);
console.log("Has Color?", updatedCar.color === "Blue");
