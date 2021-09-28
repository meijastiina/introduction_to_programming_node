/*Create a program that calculates the circumference of a circle when radius is given (circumference = 2 * π * radius). Call this method three times with different parameters and print out the results.*/
function circumferenceOfACircle(radius) {
    return 2 * Math.PI * radius;
}
let result = circumferenceOfACircle(5);
process.stdout.write("\nCircumference of a circle with radius 5 is " + result);
result = circumferenceOfACircle(15);
process.stdout.write("\nCircumference of a circle with radius 15 is " + result);
result = circumferenceOfACircle(50);
process.stdout.write("\nCircumference of a circle with radius 50 is " + result + "\n\n");