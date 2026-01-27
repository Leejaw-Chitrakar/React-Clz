// Use finally.

function connectToDatabase() {
  console.log("Connecting to database...");
  
  try {
    console.log("Executing query...");
    
    // Simulate an error
    throw new Error("Query failed: Table not found");
    
    console.log("Query successful");
  } catch (error) {
    console.error("Error occurred:", error.message);
  } finally {
    console.log("Closing database connection...");
    console.log("Connection closed (this runs regardless of error)");
  }
}

connectToDatabase();
