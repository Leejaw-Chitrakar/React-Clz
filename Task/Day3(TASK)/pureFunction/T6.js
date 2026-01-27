// 6. Create a pure function getInitials(firstName, lastName) that returns initials like "D.S." for "Dipak Shrestha".

function getInitials(firstName, lastName) {
  if (!firstName || !lastName) return "";
  return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}.`;
}

// Test cases
console.log(getInitials("Dipak", "Shrestha")); // "D.S."
console.log(getInitials("john", "doe")); // "J.D."
console.log(getInitials("Alice", "")); // ""
