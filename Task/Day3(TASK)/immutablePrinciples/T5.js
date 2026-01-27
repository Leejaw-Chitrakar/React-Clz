// 5. Change a nested property address.city in an object immutably.

const user = {
  id: 1,
  name: "Bob",
  address: {
    city: "New York",
    country: "USA"
  }
};

const updatedUser = {
  ...user,
  address: {
    ...user.address,
    city: "Los Angeles"
  }
};

console.log("Original User City:", user.address.city);
console.log("Updated User City:", updatedUser.address.city);
console.log("Is Original Modified?", user.address.city === "New York");
