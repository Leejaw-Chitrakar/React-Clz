// 7. Use filter to get products with price < 100 from an array of product objects.

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 },
  { name: "Monitor", price: 200 }
];

const cheapProducts = products.filter(product => product.price < 100);

console.log("All Products:", products);
console.log("Products under $100:", cheapProducts);
