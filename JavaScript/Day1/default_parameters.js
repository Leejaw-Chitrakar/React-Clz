// Default Parameter Example

const multiply1 = (a,b) => a*b;
let res1 = multiply1(2,3)
console.log(`result: ${res1}`);
let res2 = multiply1(6)
console.log(`result: ${res2}`);
let res3 = multiply1()
console.log(`result: ${res3}`);

// Nan = Not a Number

const multiply2 = (a=1,b=1) => a*b;
let res4 = multiply2(2,3)
console.log(`result: ${res4}`);
let res5 = multiply2(6)
console.log(`result: ${res5}`);
let res6 = multiply2()
console.log(`result: ${res6}`);