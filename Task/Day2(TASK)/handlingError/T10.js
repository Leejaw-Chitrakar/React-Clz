// Use try/catch in async function.

async function fetchUserData(userId) {
  try {
    console.log(`Fetching data for user ${userId}...`);
    
    // Simulate API call that might fail
    const response = await simulateAPICall(userId);
    
    console.log("User data:", response);
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return null;
  }
}

// Simulate an async API call
function simulateAPICall(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error("Invalid user ID"));
      } else {
        resolve({ id: userId, name: "John Doe", email: "john@example.com" });
      }
    }, 1000);
  });
}

// Test the async function
(async () => {
  await fetchUserData(1);   // Success
  await fetchUserData(-1);  // Error
})();
