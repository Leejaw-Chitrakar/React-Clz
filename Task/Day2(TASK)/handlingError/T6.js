// Multiple catch messages.

function processData(data) {
  try {
    if (data === null || data === undefined) {
      throw new TypeError("Data is null or undefined");
    }
    
    if (typeof data !== "object") {
      throw new ReferenceError("Data must be an object");
    }
    
    if (!data.name) {
      throw new Error("Name property is required");
    }
    
    console.log("Data processed successfully:", data);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Type Error:", error.message);
    } else if (error instanceof ReferenceError) {
      console.error("Reference Error:", error.message);
    } else {
      console.error("General Error:", error.message);
    }
  }
}

// Test with different error scenarios
processData(null);           // TypeError
processData("string");       // ReferenceError
processData({});             // General Error
processData({ name: "John" }); // Success
