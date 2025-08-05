// your task:
// 1. Create an enum named 'Priority' with values:
//    - Low
//    - Medium
//    - High
// 2. Create a function named 'formatTask' that:
//    - accepts one parameter 'task' with properties:
//      - name: string
//      - priority: any (to handle invalid values)
//    - returns text: "Task {name} has priority {priority}"
//    - returns "Invalid priority" if priority is not valid Priority enum value
//    - function should return type 'string'
// 3. Test your function with provided tasks

// to test your solution in terminal you can run following command:
// npm run bonus21

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your enum and function here

enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

interface Task {
  name: string;
  priority: any;
}

function isPriority(value: any): value is Priority {
  return Object.values(Priority).includes(value);
}

function formatTask(task: Task): string {
  if (isPriority(task.priority)) {
    return `Task ${task.name} has priority ${task.priority}`;
  }
  return "Invalid priority";
}

// Test calls - just console.log the results:
console.log(formatTask({ name: "Refactor", priority: Priority.Medium }));
console.log(formatTask({ name: "Deploy", priority: Priority.High }));
console.log(formatTask({ name: "Update docs", priority: Priority.Low }));
console.log(formatTask({ name: "Unknown", priority: "Critical" as any }));
console.log(formatTask({ name: "", priority: Priority.Low }));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Task Refactor has priority Medium
// Task Deploy has priority High
// Task Update docs has priority Low
// Invalid priority
// Task  has priority Low

export {};
