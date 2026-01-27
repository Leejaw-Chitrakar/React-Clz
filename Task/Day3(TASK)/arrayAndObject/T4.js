// 4. Create an array of 3 objects, each representing a student with name and grade.

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A+" }
];

console.log("Students List:", students);

// Log each student's name and grade
students.forEach(student => {
  console.log(`${student.name}: ${student.grade}`);
});
