// Create a function that calculate the sum of numbers in a n array using rest and sprade
let var1 = [1,2,3,4,5];

let addUsingRest = (...val) => {
    return val.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
    });
}
let resultUsingRest = addUsingRest(...var1);
console.log("Result using rest operator: ", resultUsingRest);

// Write a function to merge and destruction objects.

let obj1 = {
    id:1,
    name:"Hari",
    age:28,
}
let obj2 = {
    address:"Kathmandu",
    city:"Ason"
};
let obj3 = {...obj1,...obj2}; // Merging Array
console.log(obj3);
// destructuring object
let {id,name,age,address,city}= obj3;
console.log(id,name,age,address,city);

