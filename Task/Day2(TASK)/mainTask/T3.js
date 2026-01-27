// Task 3 — Module: Export a config
//
// Create a config.js and export API_BASE_URL, then import it inside main.js and print it.
//
// Goal: share configuration across modules

// This is main.js (T3.js serves as main.js)
import { API_BASE_URL, APP_NAME, VERSION } from './config.js';

console.log("=== Application Configuration ===");
console.log("API Base URL:", API_BASE_URL);
console.log("App Name:", APP_NAME);
console.log("Version:", VERSION);

// Using the config in a function
function makeAPICall(endpoint) {
  const fullURL = `${API_BASE_URL}${endpoint}`;
  console.log(`Making API call to: ${fullURL}`);
  return fullURL;
}

makeAPICall("/users");
makeAPICall("/products");
