/*1.5 Task 5: Switch Menu
Create a program with a simple menu and following functionality:
1.	Print hello
2.	Print current date
3.	End program
Remember to check invalid input, too.
*/

// Let's create a menu to be printed for the user
process.stdout.write("\nPlease select what you want to do: ");
process.stdout.write("\n1 - Print out hello");
process.stdout.write("\n2 - Print out current date & time");
process.stdout.write("\n0 - Exit\n");

// Create an event handler to listen for on event for stdin
// User input will be carried in inputFromUser
process.stdin.on( "data", function(inputFromUser){

    // Let's create a variable to store user selection
    let userSelection = Number(inputFromUser);

    // Let's acion in respect of user selection
    switch (userSelection) {
        case 0:
            process.stdout.write("Good Bye!\n\n");
            break;
        case 1:
            process.stdout.write("Hello!\n\n");
            break;
        case 2:
            process.stdout.write("Current date & time: " + new Date() + "\n\n");
            break;
        default:
            process.stdout.write("Invalid selection\n");
    }
    process.exit();
});
