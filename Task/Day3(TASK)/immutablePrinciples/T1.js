// 1. Update an object's age from 25 to 26 immutably using spread operator.

const person = { name: "John", age: 25 };

const updatedPerson = { ...person, age: 26 };

console.log("Original Person:", person);
console.log("Updated Person:", updatedPerson);
console.log("Is Immutable?", person !== updatedPerson && person.age === 25);
