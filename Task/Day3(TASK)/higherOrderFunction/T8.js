// 8. Create a higher-order function withTax(taxRate) that returns a function to add tax to price.

function withTax(taxRate) {
  return function(price) {
    return price + (price * taxRate);
  };
}

const applyVAT = withTax(0.2);
console.log("Price 100 with 20% tax:", applyVAT(100));
console.log("Price 50 with 20% tax:", applyVAT(50));