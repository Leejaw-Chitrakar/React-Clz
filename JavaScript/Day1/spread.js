// Spread Operator
// notation : ...

// Variablema hunxa 

let arr1 = [24,57,78,90];
let arr2 = [12,13,14,15];
let temp = [...arr1,...arr2]; // Merging Array
console.log(temp);


// Sperade Operator in object
let obj1 = {
    f_name : "Hari Sharma",
    age : 20
}

let obj2 = {
    address : "Kathmandu",
    City : "Ason",
    ...obj1
}

let obj3 = {
    phone: 9841987654,
    contact : 9841123456,
}

let obj4  = {...obj2,...obj3}
console.log(obj2);
console.log(obj4);