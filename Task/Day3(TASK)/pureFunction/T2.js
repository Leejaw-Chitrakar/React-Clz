// 2. Create a pure function getFullName(firstName, lastName) that returns a concatenated full name with a space.

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Test cases
console.log(getFullName("John", "Doe")); // "John Doe"
console.log(getFullName("Jane", "Smith")); // "Jane Smith"
