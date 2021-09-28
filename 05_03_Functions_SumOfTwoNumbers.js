/*
3.	Sum of Numbers
Create a program that has a method sum(firstNumber, secondNumber) that returns the sum of the numbers passed to the method as input parameters. Call this method, save the return value in a variable and print it out. Do this three times with different variable values. 
*/

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

let result = sum(1, 1);
process.stdout.write("\nFirst sum is: " + result);

result = sum(10, 13);
process.stdout.write("\nSecond sum is: " + result);

result = sum(0.789, -11);
process.stdout.write("\nFirst sum is: " + result + "\n\n");