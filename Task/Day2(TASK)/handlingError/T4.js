// Throw error manually.

function validateUsername(username) {
  if (!username || username.trim() === "") {
    throw new Error("Username cannot be empty!");
  }
  
  if (username.length < 3) {
    throw new Error("Username must be at least 3 characters long!");
  }
  
  return true;
}

try {
  validateUsername("ab"); // This will throw an error
  console.log("Username is valid");
} catch (error) {
  console.error("Validation Error:", error.message);
}
