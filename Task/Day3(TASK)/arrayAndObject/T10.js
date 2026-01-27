// 10. From an array of objects products, create a new array with only name and price properties.

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Phone", price: 500, category: "Electronics" },
  { id: 3, name: "Shirt", price: 30, category: "Clothing" }
];

// Create new array with selected properties
const productPrices = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log("Original Products:", products);
console.log("Product Prices:", productPrices);
