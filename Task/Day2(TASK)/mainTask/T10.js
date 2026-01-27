// Task 10 — Combine everything
//
// Build a tiny app flow:
// - Import config
// - Create Product class
// - Fetch mock product list using async/await
// - Handle errors using try/catch
// - Log formatted result using a utility function
//
// Goal: mini end-to-end realistic module

// 1. Import config
import { API_BASE_URL } from './config.js';

// 2. Import utilities
import { formatCurrency, generateRandomId, getTodayDate } from './utils.js';

// 3. Create Product class
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getFormattedPrice() {
    return formatCurrency(this.price);
  }

  getInfo() {
    return `${this.name} - ${this.getFormattedPrice()} (${this.category})`;
  }
}

// 4. Async function to fetch products
async function fetchProducts() {
  return new Promise((resolve, reject) => {
    console.log(`Fetching products from ${API_BASE_URL}/products...\n`);
    
    setTimeout(() => {
      // Simulate random API failure (30% chance)
      if (Math.random() > 0.7) {
        reject(new Error("API Error: Service temporarily unavailable"));
        return;
      }

      const mockProducts = [
        { id: 1, name: "Wireless Mouse", price: 29.99, category: "Electronics" },
        { id: 2, name: "Mechanical Keyboard", price: 149.99, category: "Electronics" },
        { id: 3, name: "USB-C Cable", price: 12.99, category: "Accessories" },
        { id: 4, name: "Laptop Stand", price: 45.50, category: "Accessories" },
        { id: 5, name: "Webcam HD", price: 79.99, category: "Electronics" }
      ];

      resolve(mockProducts);
    }, 1500);
  });
}

// 5. Main app function combining everything
async function runProductApp() {
  console.log("=".repeat(50));
  console.log("  PRODUCT CATALOG APP");
  console.log("=".repeat(50));
  console.log(`Date: ${getTodayDate()}`);
  console.log(`Session ID: ${generateRandomId()}`);
  console.log("=".repeat(50));
  console.log();

  try {
    // Fetch products with error handling
    const productsData = await fetchProducts();
    
    // Convert raw data to Product instances
    const products = productsData.map(p => 
      new Product(p.id, p.name, p.price, p.category)
    );

    console.log("✅ Products loaded successfully!\n");
    console.log(`Total Products: ${products.length}\n`);
    
    // Display products using utility functions
    console.log("--- PRODUCT LIST ---\n");
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.getInfo()}`);
    });

    // Calculate statistics
    console.log("\n--- STATISTICS ---");
    const totalValue = products.reduce((sum, p) => sum + p.price, 0);
    console.log(`Total Catalog Value: ${formatCurrency(totalValue)}`);
    
    const avgPrice = totalValue / products.length;
    console.log(`Average Price: ${formatCurrency(avgPrice)}`);

    // Group by category
    const categories = {};
    products.forEach(p => {
      if (!categories[p.category]) {
        categories[p.category] = [];
      }
      categories[p.category].push(p);
    });

    console.log("\n--- BY CATEGORY ---");
    Object.keys(categories).forEach(cat => {
      console.log(`${cat}: ${categories[cat].length} items`);
    });

    return products;

  } catch (error) {
    console.error("\n❌ Failed to load products");
    console.error("Error:", error.message);
    console.error("\nPlease try again later or contact support.");
    return [];
  } finally {
    console.log("\n" + "=".repeat(50));
    console.log("App execution completed");
    console.log("=".repeat(50));
  }
}

// 6. Run the application
runProductApp()
  .then(() => {
    console.log("\n✓ Application finished successfully");
  })
  .catch((err) => {
    console.error("\n✗ Application crashed:", err);
  });
