// Divide number by zero.

try {
  const result = 10 / 0;
  console.log("Result:", result); // Infinity (not an error in JavaScript)
  
  // To demonstrate error handling with division, let's create an actual error scenario
  if (!isFinite(result)) {
    throw new Error("Division resulted in Infinity");
  }
} catch (error) {
  console.error("Error:", error.message);
}
