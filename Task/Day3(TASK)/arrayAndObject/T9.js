// 9. Create an object profile with nested address object containing city and country.

const profile = {
  username: "jdoe",
  email: "jdoe@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

console.log("User Profile:", profile.username);
console.log("City:", profile.address.city);
console.log("Country:", profile.address.country);
