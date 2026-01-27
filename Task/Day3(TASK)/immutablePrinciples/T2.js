// 2. Add a new hobby to a person's hobbies array immutably.

const person = {
  name: "Jane",
  hobbies: ["Reading", "Drawing"]
};

const updatedPerson = {
  ...person,
  hobbies: [...person.hobbies, "Coding"]
};

console.log("Original Person:", person);
console.log("Updated Person:", updatedPerson);
console.log("Old Hobbies:", person.hobbies);
console.log("New Hobbies:", updatedPerson.hobbies);
