// Task 7 — Promise for fetching settings
//
// Create a function that returns a Promise that resolves after 2 seconds with 
// app settings (theme, language).
// Use .then() to print them.
//
// Goal: simulate async settings

function fetchAppSettings() {
  return new Promise((resolve, reject) => {
    console.log("Fetching app settings...");
    
    // Simulate network delay
    setTimeout(() => {
      const settings = {
        theme: "dark",
        language: "en-US",
        notifications: true,
        fontSize: "medium"
      };
      
      resolve(settings);
    }, 2000);
  });
}

// Use .then() to handle the resolved promise
console.log("Starting settings fetch...");

fetchAppSettings()
  .then((settings) => {
    console.log("\n=== App Settings Loaded ===");
    console.log("Theme:", settings.theme);
    console.log("Language:", settings.language);
    console.log("Notifications:", settings.notifications);
    console.log("Font Size:", settings.fontSize);
    return settings;
  })
  .then((settings) => {
    console.log("\n=== Applying Settings ===");
    console.log(`Applying ${settings.theme} theme...`);
    console.log(`Setting language to ${settings.language}...`);
    console.log("Settings applied successfully!");
  })
  .catch((error) => {
    console.error("Error loading settings:", error);
  });

console.log("Settings request sent (waiting for response)...");
