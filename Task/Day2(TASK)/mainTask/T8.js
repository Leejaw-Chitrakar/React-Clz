// Task 8 — async/await fetching mock data
//
// Create a function fetchUsers() that returns a Promise with an array of users 
// after 1 second.
// Use async/await to get and log users.
//
// Goal: basic async API task

function fetchUsers() {
  return new Promise((resolve) => {
    console.log("Fetching users from API...");
    
    setTimeout(() => {
      const users = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
        { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Moderator" }
      ];
      
      resolve(users);
    }, 1000);
  });
}

// Using async/await to fetch and display users
async function displayUsers() {
  console.log("Starting user fetch...\n");
  
  const users = await fetchUsers();
  
  console.log("\n=== Users Loaded ===");
  console.log(`Total users: ${users.length}\n`);
  
  users.forEach((user, index) => {
    console.log(`${index + 1}. ${user.name}`);
    console.log(`   Email: ${user.email}`);
    console.log(`   Role: ${user.role}`);
    console.log();
  });
  
  // Additional processing
  const adminUsers = users.filter(user => user.role === "Admin");
  console.log(`Admin users: ${adminUsers.length}`);
  
  return users;
}

// Execute the async function
displayUsers()
  .then(() => {
    console.log("User display complete!");
  });

console.log("Request initiated (execution continues)...");
