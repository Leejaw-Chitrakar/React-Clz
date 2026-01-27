// 5. Create a nested object company with properties name, location, and employees (an array of names).

const company = {
  name: "Tech Solutions Inc.",
  location: "Silicon Valley",
  employees: ["John Smith", "Sarah Jones", "Mike Brown"]
};

console.log("Company:", company.name);
console.log("Location:", company.location);
console.log("First Employee:", company.employees[0]);
console.log("All Employees:", company.employees.join(", "));
