// Task 7 – Default Parameters
// Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.

const sayHello = (name = "Guest") => {
    return `Welcome, ${name}`;
}

console.log(sayHello("Leejaw"));
console.log(sayHello());