// 8. Create an array shoppingList and add a new item at the beginning immutably.

const shoppingList = ["Milk", "Bread", "Eggs"];

// Create a new array with the new item spread at the beginning
const updatedList = ["Apples", ...shoppingList];

console.log("Original List:", shoppingList);
console.log("Updated List:", updatedList);

// Verify immutability
console.log("Is original list length same?", shoppingList.length === 3); // Should be true
