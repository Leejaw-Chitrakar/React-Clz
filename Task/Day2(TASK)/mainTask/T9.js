// Task 9 — try/catch handling API errors
//
// Modify the previous task so the promise randomly rejects.
// Add try/catch to show a friendly message.
//
// Goal: handle API failures safely

function fetchUsersWithError() {
  return new Promise((resolve, reject) => {
    console.log("Fetching users from API...");
    
    setTimeout(() => {
      // Randomly simulate success or failure
      const shouldFail = Math.random() > 0.5;
      
      if (shouldFail) {
        reject(new Error("Network error: Failed to fetch users"));
      } else {
        const users = [
          { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
          { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
          { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" }
        ];
        resolve(users);
      }
    }, 1000);
  });
}

// Using async/await with try/catch for error handling
async function displayUsersWithErrorHandling() {
  try {
    console.log("Starting user fetch...\n");
    
    const users = await fetchUsersWithError();
    
    console.log("✅ Success! Users loaded successfully\n");
    console.log("=== Users List ===");
    console.log(`Total users: ${users.length}\n`);
    
    users.forEach((user) => {
      console.log(`• ${user.name} (${user.email}) - ${user.role}`);
    });
    
    return users;
    
  } catch (error) {
    console.error("\n❌ Error occurred!");
    console.error("Friendly message: We couldn't load the users right now.");
    console.error("Please check your internet connection and try again.");
    console.error("\nTechnical details:", error.message);
    
    // Return empty array as fallback
    return [];
  } finally {
    console.log("\n--- Request completed ---");
  }
}

// Execute the async function multiple times to show both success and failure
console.log("=== Attempt 1 ===");
displayUsersWithErrorHandling()
  .then((users) => {
    console.log(`\nFinal result: ${users.length} users\n`);
    
    // Try again to show different outcome
    console.log("=== Attempt 2 ===");
    return displayUsersWithErrorHandling();
  })
  .then((users) => {
    console.log(`\nFinal result: ${users.length} users`);
  });
