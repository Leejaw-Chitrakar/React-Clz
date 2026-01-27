// 1. Write a higher-order function repeat(action, times) that calls action function times times.

function repeat(action, times) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeat((index) => {
  console.log(`Execution ${index + 1}`);
}, 3);
