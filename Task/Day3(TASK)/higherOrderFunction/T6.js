// 6. Create a higher-order function sortBy(arr, key) that sorts array of objects by given key.

function sortBy(arr, key) {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];
const sortedByAge = sortBy(users, 'age');
console.log("Original:", users);
console.log("Sorted by age:", sortedByAge);
