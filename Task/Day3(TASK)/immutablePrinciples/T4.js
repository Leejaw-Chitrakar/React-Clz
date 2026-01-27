// 4. Replace the second element in an array immutably.

const fruits = ["Apple", "Banana", "Cherry"];

const updatedFruits = [
  ...fruits.slice(0, 1),
  "Blueberry",
  ...fruits.slice(2)
];

console.log("Original Fruits:", fruits);
console.log("Updated Fruits:", updatedFruits);
