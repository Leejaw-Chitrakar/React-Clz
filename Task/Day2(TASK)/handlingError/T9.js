// Catch error and log name.

try {
  // Attempting to access undefined variable
  console.log(nonExistentVariable);
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
  console.log("Error Stack:", error.stack);
}

try {
  // Creating a custom error
  throw new TypeError("This is a custom TypeError");
} catch (error) {
  console.log("\nCaught Error:");
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
}
