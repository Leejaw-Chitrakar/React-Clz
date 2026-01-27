// 9. Write a function debounce(fn, delay) that delays function execution (basic version).

function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const logMessage = debounce((msg) => console.log("Logged:", msg), 100);

logMessage("Hello");
logMessage("Hello");
logMessage("Hello World");

setTimeout(() => {}, 1000);
