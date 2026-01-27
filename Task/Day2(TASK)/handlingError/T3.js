// Use custom error message.

try {
  const age = -5;
  
  if (age < 0) {
    throw new Error("Age cannot be negative! Please enter a valid age.");
  }
  
  console.log("Age is valid:", age);
} catch (error) {
  console.error("Custom Error:", error.message);
}
