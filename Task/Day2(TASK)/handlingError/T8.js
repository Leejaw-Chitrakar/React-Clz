// Try JSON.parse with invalid JSON.

const invalidJSON = '{"name": "John", "age": 30,}'; // Trailing comma makes it invalid
const validJSON = '{"name": "John", "age": 30}';

try {
  console.log("Attempting to parse invalid JSON...");
  const data = JSON.parse(invalidJSON);
  console.log("Parsed data:", data);
} catch (error) {
  console.error("JSON Parse Error:", error.message);
  console.error("Error name:", error.name);
}

try {
  console.log("\nAttempting to parse valid JSON...");
  const data = JSON.parse(validJSON);
  console.log("Parsed data:", data);
} catch (error) {
  console.error("JSON Parse Error:", error.message);
}
