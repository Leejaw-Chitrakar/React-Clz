// Task 2: Write a function that returns a new object without modifying the original

const originalObj = {
    name: "Alice",
    role: "Developer",
    skills: ["JavaScript", "React"],
    age: 24,
};

function createUpdatedObject(obj, newAge) {
    return {
        ...obj,
        age: newAge,
    };
}

const updatedObj = createUpdatedObject(originalObj, 29);
console.log("Original Object:", originalObj);
console.log("Updated Object:", updatedObj);