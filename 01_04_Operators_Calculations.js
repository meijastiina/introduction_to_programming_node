/* 1.4 Task 4: Basic Calculations
Create a simple program with the following functionality: 
1.	Ask for user to input a number.
2.	Define a secret number.
3.	Perform and print out basic calculations for that number with the secret number. 
*/

// Let's ask user to input a number
process.stdout.write("Please enter a number: ");

// Let's read in the input
process.stdin.on( "data", function( inputFromUser ){
    // Let's create a variable to store user input and convert it to a number in order to be able to use it for calculations
    let givenNumber = Number(inputFromUser);
    // Let's create our second number constant to use in calculations
    const SECOND_NUMBER = 12;

    // Let's print out basic calculations with these two numbers
    process.stdout.write(givenNumber + " + " + SECOND_NUMBER + " = " + (givenNumber + SECOND_NUMBER));
    process.stdout.write("\n" + givenNumber + " - " + SECOND_NUMBER + " = " + (givenNumber - SECOND_NUMBER));
    process.stdout.write("\n" + givenNumber + " * " + SECOND_NUMBER + " = " + (givenNumber * SECOND_NUMBER));
    process.stdout.write("\n" + givenNumber + " / " + SECOND_NUMBER + " = " + (givenNumber / SECOND_NUMBER));
    process.stdout.write("\n" + givenNumber + " % " + SECOND_NUMBER + " = " + (givenNumber % SECOND_NUMBER));

    process.stdout.write("\n" + givenNumber + "++  = " + ++givenNumber);
    process.stdout.write("\n" + givenNumber + "--  = " + --givenNumber);

    process.exit();
})