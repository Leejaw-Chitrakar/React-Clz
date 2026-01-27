// 6. Use map to extract only names from an array of user objects.

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 22 }
];

const names = users.map(user => user.name);

console.log("Users:", users);
console.log("Names:", names);
