// Task 2 — "this" losing context
//
// Create a button click example (even if simulated) where calling a method loses this, 
// then fix it using .bind(this)
//
// Goal: experience the common UI bug

class Button {
  constructor(label) {
    this.label = label;
    this.clicks = 0;
  }

  handleClick() {
    this.clicks++;
    console.log(`${this.label} button clicked ${this.clicks} times`);
  }
}

const myButton = new Button("Submit");

// Problem: Losing context when passing method as callback
console.log("--- WITHOUT .bind() - This will cause an error ---");
const handleClickBroken = myButton.handleClick;
try {
  handleClickBroken(); // This will fail - 'this' is undefined
} catch (error) {
  console.log("Error:", error.message);
}

// Solution: Using .bind(this) to preserve context
console.log("\n--- WITH .bind() - This works correctly ---");
const handleClickFixed = myButton.handleClick.bind(myButton);
handleClickFixed(); // Works!
handleClickFixed(); // Works!

// Alternative solutions:
console.log("\n--- Arrow function alternative ---");
const handleClickArrow = () => myButton.handleClick();
handleClickArrow(); // Also works!
