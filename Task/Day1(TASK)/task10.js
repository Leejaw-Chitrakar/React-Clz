// Task 10 – Merge and Destructure Objects
// Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.

let obj1 = {
    a : 1,
    b : 2
}

let obj2 = {
    c : 3,
    d : 4
}

let obj3 = {...obj1,...obj2};

let {a,b} = obj3;
console.log(a,b);
