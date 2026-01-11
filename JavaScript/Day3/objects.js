// objects: key:value pair or json data
// notation: {}
myObj = {
    "fullName": "Sachin",  // "fullname" is same as fullname for key
    age: 20,
    address: "Kathmandu",
    year: 2022,
    isMarried: true,
}

// accessing value from key
// 1) using bracket notation
let fn = myObj["fullname"]
console.log(`Fullname is ${fn}`);
// 2) dot notation (recommended)
let addr = myObj.address;
console.log(`Address is ${addr}`);
// adding new ket:values pair
myObj.country = "Nepal";
console.log("My Object:", myObj);
// updating or changing value of key
myObj.age = 30;
console.log("My Object:", myObj);
// deleting key:value pair
delete myObj.isMarried
console.log("My Object:", myObj);

// converting to (key:values pair) to object(array)
// convertinf to keys array
let keysArray = Object.keys(myObj);
console.log("keys Array: ", keysArray);
// converting to values array
let valuesArray = Object.values(myObj);
console.log("values Array: ", valuesArray);
// converting into entries [key, values] array
let entries = Object.entries(myObj);
console.log("Entries: ", entries);

// todo: use forEach for all the above and use destructing for each entries inside forEach

entries.forEach(
    ([key, values,index]) => {
        console.log("index:",index,"Key:",key,"values:",values);
    }
)