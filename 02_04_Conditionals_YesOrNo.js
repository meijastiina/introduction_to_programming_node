
/*2.4 Task 4: Yes or No
Write a simple program that asks user a simple yes or no question and prints out a corresponding message. Remember to also handle invalid input.
Modified from Likejavascript.js (c) Kari Laitinen http://www.naturalprogramming.com
*/

// Let's ask user a simple yes or no question
process.stdout.write( "\nAre you younger than 18?\nPlease, answer Y or N :  " ) ;

// Let's read in user input
process.stdin.on("data", function(inputFromUser) {
    // The following statements will be executed after the user
    // of this program has typed in a response.

    // Let's create a variable to store the first letter of the user response.
    // String converts the input to a string. Square brackets are used to refer to a specific character of the string. Indices start from 0
    let givenLetter = (String(inputFromUser))[0];
    
    // Let's check if the given letter is y
    if( givenLetter == 'Y' || givenLetter == 'y') {
        // Given letter is upper or lower case y
        process.stdout.write("\nYou are underage. \n\n") ;
    } else if (givenLetter == 'N' || givenLetter == 'n') {
        // Given letter in upper or lower case n
        process.stdout.write("\nYou are grown up\n\n" ) ;
    } else {
        // Given letter is something else
        process.stdout.write( "\n" + givenLetter + " is not a valid input.") ;
    }
    process.exit() ;  // This terminates the program.
} ) ;
