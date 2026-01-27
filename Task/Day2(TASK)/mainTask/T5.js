// Task 5 — Class representing a Product
//
// Create a class Product with:
// - name
// - price
// - getInfo()
//
// Create an object and print info.
//
// Goal: basic classes in real products

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }

  getDiscountedPrice(discountPercent) {
    const discounted = this.price * (1 - discountPercent / 100);
    return `${this.name} with ${discountPercent}% off: $${discounted.toFixed(2)}`;
  }
}

// Create product objects
const laptop = new Product("MacBook Pro", 1999.99);
const mouse = new Product("Wireless Mouse", 29.99);
const keyboard = new Product("Mechanical Keyboard", 149.99);

// Print product info
console.log("=== Product Information ===\n");
console.log(laptop.getInfo());
console.log(mouse.getInfo());
console.log(keyboard.getInfo());

// Test discount method
console.log("\n=== Discounted Prices ===");
console.log(laptop.getDiscountedPrice(15));
console.log(mouse.getDiscountedPrice(20));
