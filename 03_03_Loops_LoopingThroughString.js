/* Task 3: Looping through Strings
Create a program with the following functionality:
1.	Ask the user to enter a string.
2.	Loop through the string and print out the string letter by letter saying “1. letter is [first letter of given string.]”
*/

process.stdout.write("Please enter a string\n");

// Read user input
process.stdin.on("data", function(inputFromUser) {
    // Create a variable for user input. Trim gets rid of unwanted whitespace. 
    let givenString = inputFromUser.toString().trim();
    // Create a variable for iterator variable
    let i = 0;

    // Loop through the whole length of the string
    while (i < givenString.length) {
        process.stdout.write("\n" + (i + 1) + ". character is " + givenString.charAt(i) + ".");
        i++;
    }
    process.stdout.write("\n\n");
    // Terminate program
    process.exit();
})