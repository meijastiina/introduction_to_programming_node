/*
4.3 Task 3: Other way around
Create a program that asks the user for a string and then prints it out from the last letter to the first. Use a for loop.
*/
// Prompt for a string
process.stdout.write("Please enter a string: ");
// Read in input 
process.stdin.on("data", function(inputFromUser) {
    // Store user input in a variable
    let enteredString = inputFromUser.toString().trim();
    process.stdout.write("The word backwards is:");
    for (let i = enteredString.length; i >= 0; i--) {
        process.stdout.write(enteredString.charAt(i));
    }
    process.stdout.write("\n\n");
    process.exit();
})