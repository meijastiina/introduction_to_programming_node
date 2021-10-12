/*
9.1 Task 1 ToDo List

Create a simple ToDo List program with at least the following functionality:
•	Add a task
•	Remove a task
•	Print all tasks
Use OO approach and implement suitable classes. 
*/

// This is a variable to keep track of what action user has chosen. Let's initialize it empty.
let currentCommand = '';
// Constants for menu commands
const MENU_ADD = '1';
const MENU_REMOVE = '2';
const MENU_PRINT = '3';
const MENU_QUIT = '0';
// List class
class List {
    #tasks;
    // Initialize tasks array in constructor
    constructor() {
        this.#tasks = new Array();
    }
    // Method for adding a new task. Creates a new task element and adds it into the array.
    addNewTask(name) {
        let newTask = new Task(name);
        this.#tasks.push(newTask);
    }
    // Method for deleting the list
    removeTask(index) {
        this.#tasks.splice(index, 1);
    }
    // Method for printing the list.
    printList() {
        this.#tasks.forEach(task => {
            process.stdout.write(task.getInfo() + '\n');
        }); 
    }
    // Static method for printing menu.
    static printMenu() {
        process.stdout.write('\n\n1 - Add task');
        process.stdout.write('\n2 - Remove task');
        process.stdout.write('\n3 - Print List');
        process.stdout.write('\n0 - Quit\n\n');
    }

}
class Task {
    #name;
    #createdDate;

    constructor(name) {
        this.#name = name;
        this.#createdDate = new Date();
    }

    getName() {
        return this.#name;
    }

    getInfo() {
        return this.#name + ' Created: ' + this.#createdDate;
    }
}

let todoList = new List();
List.printMenu();
process.stdin.on("data", function(inputFromUser){
    let userInput = inputFromUser.toString().trim();
    if (currentCommand == '') {
        switch (userInput) {
            case MENU_ADD: 
                process.stdout.write("\nTask name: ")
                currentCommand = MENU_ADD;
                break;
            case MENU_PRINT:
                todoList.printList();
                List.printMenu();
                break;
            case MENU_REMOVE:
                process.stdout.write("\nTask id: ")
                currentCommand = MENU_REMOVE;
                break;
            case MENU_QUIT:
                process.exit();
                break;
            default:
                process.stdout.write("\nInvalid choice\n");
                List.printMenu();
        }
    } else {
        switch (currentCommand) {
            case MENU_ADD:
                todoList.addNewTask(userInput);
                process.stdout.write("\nTask " + userInput + " added.\n\n");
                currentCommand = '';
                break;
            case MENU_REMOVE:
                todoList.removeTask(userInput);
                process.stdout.write("\nTask " + userInput + " removed.\n\n");
                currentCommand = '';
                break;
            
        }
        List.printMenu();
    }
})