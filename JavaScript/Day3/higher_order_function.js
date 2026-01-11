// Higher Order Function: a function that takes function as argument or returns function
// res = (a*b)\c
let multiply = (a,b) => {  // also can be written as (a,b) => a*b
    return a*b;
}
// calcExpression higher order function with multiplyFunc and divideFunc as an function parameter
let calcExpression = (a,b,c,multiplyFunc,divideFunc) =>{
    let multiplyResult = multiplyFunc(a,b);
    let divideResult = divideFunc(multiplyResult,c);
    return divideResult;
}

// calling highrt order function
let res = calcExpression(34,56,78,multiply,(mRes,c) => mRes/c);
console.log("Result:",res);

// Higher Order Fucntion that returns function
let createModulusCalc = (dividend) => {
    return (a) => {
        return a % dividend;
    }
}
let myRemFunc = createModulusCalc(45);
let remRes = myRemFunc(100);
console.log("Reminder Result:",remRes);