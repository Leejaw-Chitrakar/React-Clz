// 3. Add a new property isRead: true to an existing book object immutably (return new object).

const book = {
  title: "1984",
  author: "George Orwell"
};

// Create a new object with the existing properties and the new isRead property
const updatedBook = {
  ...book,
  isRead: true
};

console.log("Original Book:", book);
console.log("Updated Book:", updatedBook);

// Verify immutability
console.log("Is original book modified?", book.isRead === undefined); // Should be true
