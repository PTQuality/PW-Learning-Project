// Your task:
// 1. Create Task class representing single task with properties: name, description, status
// 2. Create TaskList class managing list of tasks with methods to:
//    - Add new tasks to the list
//    - Remove tasks based on name
//    - Mark task as done
//    - Display all tasks with their status
// 3. Test your classes with provided test data

// to test your solution in terminal You can run following command:
// npm run l01e23

//// TODO:
// here place your solution:

class Task {
  constructor(name, description, status) {
    this.name = name;
    this.description = description;
    this.status = status;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  markTaskAsDone(taskName) {
    const taskToBeMarkedAsDone = this.tasks.find(
      task => task.name === taskName
    );
    taskToBeMarkedAsDone.status = "done";
  }
  displayAllTasks() {
    for (let task of this.tasks) console.log(task);
  }
  removeTask(taskName) {
    this.tasks = this.tasks.filter(task => task.name !== taskName);
  }
}

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Test data to use:
// Test data to use:
// Test data to use:
const myTaskList = new TaskList();
const task1 = new Task("Shopping", "Buy groceries for the week", "to do");
const task2 = new Task("Laundry", "Do the laundry", "to do");
const task3 = new Task("Cleaning", "Clean the room", "to do");

myTaskList.addTask(task1);
myTaskList.addTask(task2);
myTaskList.addTask(task3);

console.log("=== All tasks ===");
myTaskList.displayAllTasks();

myTaskList.markTaskAsDone("Shopping"); // Mark task as done

console.log("\n=== After marking 'Shopping' as done ===");
myTaskList.displayAllTasks();

myTaskList.removeTask("Laundry"); // Remove task

console.log("\n=== After removing 'Laundry' ===");
myTaskList.displayAllTasks();
