// Task 1: Use map and filter to process an array of objects

let arrayOfObj = [
    {
        name: "Sachin",
        age: 20,
    },
    {
        name: "Rahul",
        age: 18,
    },
    {
        name: "Sahil",
        age: 15,
    },
];

let updatedArrayOfObj = arrayOfObj.map(
    ({fullName, age}, index) => {
    return {
        fullName: fullName.toUpperCase(),
        age: age + 5,
    }
})
console.log("updatedArrayObject: ",updatedArrayOfObj);
