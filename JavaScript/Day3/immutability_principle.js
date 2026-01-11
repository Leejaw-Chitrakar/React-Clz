// Immutability principle indicates that we should not change the state of an object
// instead of changing the state of an object, we create a new object
// Mutable Object
let myMark = [90,45,67,23,56];
console.log("Original Marks:",myMark);
myMark.push(45);
console.log("After changing element:",myMark);

//Immutable Object
let animals = ["cat","dog","mouse"];
console.log("Original Animals:",animals);
let addedAnimals = [...animals,"rat"];
console.log("Original:",animals);
console.log("Modified:",addedAnimals);

let place = {
    placeName: "Pokhara",
    country: "Nepla",
}
let updatedPlace = {
    ...place,
    rank: 1,
}

console.log("Original Place:", place);
console.log("Updated Place:", updatedPlace);