// 9. Use map and filter together to get names of adults (age >= 18) in uppercase.

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 25 }
];

const adultNamesUpper = people
  .filter(person => person.age >= 18)
  .map(person => person.name.toUpperCase());

console.log("People:", people);
console.log("Adult Names (Uppercase):", adultNamesUpper);
