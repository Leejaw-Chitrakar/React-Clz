// 7. Write a pure function fahrenheitToCelsius(f) that converts Fahrenheit to Celsius.

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

// Test cases
console.log(fahrenheitToCelsius(32)); // 0
console.log(fahrenheitToCelsius(212)); // 100
console.log(fahrenheitToCelsius(98.6)); // 37
