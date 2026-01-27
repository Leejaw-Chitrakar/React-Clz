// 5. Write a pure function calculateArea(radius) that returns the area of a circle (use π ≈ 3.14).

function calculateArea(radius) {
  if (radius < 0) return 0; // Area cannot be negative
  const PI = 3.14;
  return PI * radius * radius;
}

// Test cases
console.log(calculateArea(5)); // 78.5
console.log(calculateArea(10)); // 314
console.log(calculateArea(0)); // 0
