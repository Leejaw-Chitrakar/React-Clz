// 4. Use find to get the first object with age > 18 from an array of user objects.

const users = [
  { name: "John", age: 15 },
  { name: "Jane", age: 22 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 17 }
];

const firstAdult = users.find(user => user.age > 18);

console.log("Users:", users);
console.log("First Adult found:", firstAdult);
