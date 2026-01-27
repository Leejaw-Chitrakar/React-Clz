// Task 4 — Module: Utility functions
//
// Make a utils.js with:
// - formatCurrency()
// - generateRandomId()
// - getTodayDate()
//
// Import and use them in another file.
//
// Goal: reusable utility module

import { formatCurrency, generateRandomId, getTodayDate } from './utils.js';

console.log("=== Testing Utility Functions ===\n");

// Test formatCurrency
console.log("--- Currency Formatting ---");
console.log(formatCurrency(1234.56));
console.log(formatCurrency(999.99, "EUR"));
console.log(formatCurrency(50000, "JPY"));

// Test generateRandomId
console.log("\n--- Random ID Generation ---");
console.log("ID 1:", generateRandomId());
console.log("ID 2:", generateRandomId());
console.log("ID 3:", generateRandomId());

// Test getTodayDate
console.log("\n--- Today's Date ---");
console.log(getTodayDate());

// Practical example: Creating an invoice
console.log("\n--- Sample Invoice ---");
const invoice = {
  id: generateRandomId(),
  date: getTodayDate(),
  amount: formatCurrency(1549.99)
};
console.log(`Invoice #${invoice.id}`);
console.log(`Date: ${invoice.date}`);
console.log(`Total: ${invoice.amount}`);
