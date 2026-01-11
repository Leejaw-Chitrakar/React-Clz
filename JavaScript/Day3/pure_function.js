// Pure Function does not depends on any external variables
// it doesnot have any side effects
// Example
let c =10;
let add = (a,b) => {
    return a+b;
}
let res = add(20,30);
console.log("Result:",res);

// Impure Function Example
let tax = 0.13;
let calcTax = (price) => {
    return price * tax;
}
let taxAmt = calcTax(100);
console.log("Total Tax:",taxAmt);