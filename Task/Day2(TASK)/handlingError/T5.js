// Create function with try/catch.

function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    
    const result = a / b;
    console.log(`${a} / ${b} = ${result}`);
    return result;
  } catch (error) {
    console.error("Error in safeDivide:", error.message);
    return null;
  }
}

// Test the function
safeDivide(10, 2);  // Success
safeDivide(10, 0);  // Error caught
