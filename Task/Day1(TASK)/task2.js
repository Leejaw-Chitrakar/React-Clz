// Task 2 – let and const Scope
// Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.

for (let i=0; i<3 ; i++){
    console.log('index = ' + i);
    const greeting = "Hello Guys!!";
    console.log(greeting);
}
// console.log('index = ' + i);
// console.log(greeting);