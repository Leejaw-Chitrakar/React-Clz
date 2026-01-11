// arrays: Collection of elements
// notation: []
// creating array
let myArr = [90, 89, 78, 67, 56];

// accessing element in some index
console.log("Element in index 4:", myArr[4]);
console.log("Element in index 2:", myArr[2]);

// Adding new element at last 
myArr.push(20);

// Removing last element
myArr.pop();
console.log("My new array:", myArr);

// Changing element in some index
myArr[3] = 300;
console.log("My new array:", myArr);

// normal loop in array
for (let i = 0; i < myArr.length; i++) {
    console.log(`Index of array ${i} data stored is ${myArr[i]}`);
}

// using for ---- of
for (let element of myArr) {
    console.log(`Element: ${element}`);
}

// using for ---- in
for (let index in myArr) {
    console.log(`Index of array ${index} data stored is ${myArr[index]}`);
}

// using extension function forEach
myArr.forEach(
    // Callback function
    (element, index) => {
        console.log(`index: ${index} element: ${element}`);
    }
)

let names = ["Anita", "Ravi", "rohit", "Rahul", "Sachin"]
// using map to modify each element in array
let modifaicationUp = names.map(
    (element, index) => {
        return element.toUpperCase();
    }
)

let modifaicationLw = names.map(
    (element, index) => {
        return element.toLowerCase();
    }
)
console.log(`Modified names: ${modifaicationUp}`);
console.log(`Modified names: ${modifaicationLw}`);

// using reduce to accumulate the element in array
let numbers = [90, 80, 70, 100, 130, 140];
// sum of all element in array
let sum = numbers.reduce(
    (accumulator, element) => {
        return accumulator + element;
    },
    0 // initial value for accumulator
);
console.log(`The sum is ${sum}`);

// to print maximum value of the element
let max = numbers.reduce(
    (accumulator, element) => {
        return accumulator > element ? accumulator : element;
    }, 0
)
console.log(`Max element is ${max}`);

// using find in array: always returns first found element
let marks = [56, 78, 23, 45, 12];
let foundmarks = marks.find(
    (ele, inx) => {
        return ele < 25
    }
)
console.log(`Found Marks: ${foundmarks}`);

// delete element in array 
// todo: slice, splice
delete marks[1];
console.log(`marks: ${marks}`);

//using filter in array
let filtermarks = marks.filter(
    (ele, index) => {
        return ele < 50;
    }
)
console.log(`Filtered Mark: ${filtermarks}`);

// todo: sort, reverse, concat, join
// sort
let sortMark = marks.sort();
console.log(`Sorted Mark: ${sortMark}`);

// reverse
let nums = [1, 2, 3, 4, 5]
let numsMark = nums.reverse();
console.log(`Reversed Numbers: ${numsMark}`);

// concat
let str1 = "Leejaw";
let str2 = "Chitrakar";
let concatName = str1.concat(str2);
console.log(`Concat Name: ${concatName}`);

// join
let nameList = ["John", "Brian", "Joshua"]
let joinName = nameList.join(", ");
console.log(joinName); 