// 7. Remove a property deletedAt from an object immutably.

const post = {
  id: 101,
  title: "Hello World",
  content: "This is a post",
  deletedAt: "2023-01-01"
};

const { deletedAt, ...activePost } = post;

console.log("Original Post:", post);
console.log("Active Post:", activePost);
console.log("Is deletedAt present?", activePost.deletedAt !== undefined);
