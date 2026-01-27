// 10. Update a specific object in an array of objects immutably (by id).

const tasks = [
  { id: 1, title: "Do laundry", completed: false },
  { id: 2, title: "Write code", completed: false },
  { id: 3, title: "Exercise", completed: false }
];

const taskIdToComplete = 2;

const updatedTasks = tasks.map(task => 
  task.id === taskIdToComplete 
    ? { ...task, completed: true } 
    : task
);

console.log("Original Tasks:", tasks);
console.log("Updated Tasks:", updatedTasks);
console.log("Is target task completed?", updatedTasks.find(t => t.id === 2).completed);
