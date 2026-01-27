// Task 1 — "this" inside an object method
//
// Create a user object that has name and login() method.
// Inside login(), print the username using this.name.
//
// Goal: understand object method context

const user = {
  name: "Alice Johnson",
  login() {
    console.log(`Welcome back, ${this.name}!`);
    console.log(`User ${this.name} logged in successfully.`);
  }
};

// Test the method
user.login();
