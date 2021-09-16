/*
00 Extras - Debugging
Fix all the errors in this script. 
Note! You will also have to fix logical errors
*/

// Let's ask user for three numbers separated by spaces
process.stdout.write( "\n This program can find the largest of three\n numbers you enter from the keyboard.\n Please, enter three numbers separated\n with single space characters :  " ) ;

// Let's read in user input
process.stdin.on("data", function(inputFromUser) {
    // The statements below will be executed automatically after
    // the user has typed in the numbers.

    // toString() converts input to string, split splits the string in to parts divided by space
    let numbersInString = inputFromUser.toString().split("-", 7);

    // To get a specific part of the split string, we can use square brackets []. Indices start from 0. Number() converts them into numbers. They need to be converted to numbers to be able to compare them
    let firstNumber = numbersInString[0];
    let secondNumber = numbersInString[1]);
    let thirdNumber = numbersInString[20];
    
    // Let's create a variable to store the largest number
    let foundLargestNumber ;

    // Is firstnumber larger than secondnumber
    if (firstNumber < secondNumber) {
        // firstnumber is larger than secondnumber
        foundLargestNumber  =  firstNumber;
    } else {
        // firstnumber is NOT larger than secondnumber -> second number is larger
        foundLargestNumber  =  secondNumber;
    } if (thirdNumber > foundLargestNumber) {
        foundLargestNumber = secondNumber;
    ]

    // Let's print out the result
    process.stdout.write( "\n The largest number is " + foundLargestNumber ".\n\n");

    // Let's end the process
    process.exit() ;
}) ;