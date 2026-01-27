// Task 6 — Inheritance example
//
// Create Product, then extend a new class FoodProduct that has an expiry date
//
// Goal: model real objects with OOP

// Base class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }

  getTotalPrice(quantity) {
    return this.price * quantity;
  }
}

// Extended class with additional properties
class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price); // Call parent constructor
    this.expiryDate = new Date(expiryDate);
  }

  getInfo() {
    // Override parent method
    const baseInfo = super.getInfo();
    return `${baseInfo}, Expires: ${this.expiryDate.toLocaleDateString()}`;
  }

  isExpired() {
    return new Date() > this.expiryDate;
  }

  getDaysUntilExpiry() {
    const today = new Date();
    const diffTime = this.expiryDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}

// Create instances
console.log("=== Regular Products ===\n");
const laptop = new Product("Laptop", 999.99);
console.log(laptop.getInfo());

console.log("\n=== Food Products ===\n");
const milk = new FoodProduct("Organic Milk", 4.99, "2026-02-05");
const bread = new FoodProduct("Whole Wheat Bread", 3.49, "2026-01-30");
const oldCheese = new FoodProduct("Cheddar Cheese", 6.99, "2026-01-20");

console.log(milk.getInfo());
console.log(`Days until expiry: ${milk.getDaysUntilExpiry()}`);
console.log(`Is expired? ${milk.isExpired()}`);

console.log("\n" + bread.getInfo());
console.log(`Days until expiry: ${bread.getDaysUntilExpiry()}`);
console.log(`Is expired? ${bread.isExpired()}`);

console.log("\n" + oldCheese.getInfo());
console.log(`Days until expiry: ${oldCheese.getDaysUntilExpiry()}`);
console.log(`Is expired? ${oldCheese.isExpired()}`);
