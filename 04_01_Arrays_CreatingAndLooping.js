/*
Task 04.01. Task 1.	Creating and Looping Through an Array
Create a program with the following arrays:
1.	an integer array with five items: 5, 7, 32, 31 and 8.
2.	a double array with three items: 12.4, -13.55 and 67.44,
3.	a string array with four items: “Helsinki”, “Lissabon”, “New York” and “Shanghai”.

Then print out the following:
-	”The value in the index number 3 is: “ and the value from the string array. 
-	“The fourth item in the int array is: “ and the value from the int array.
-	“In the double array there are xx items” where xx is the size of the array.
-	The whole content of the integer array with a loop.
-	The whole content of the double integer from the last item to the first. 
Lastly, in a loop go through the string array and set all the values to be “empty”.
*/

// an integer array with five items: 5, 7, 32, 31 and 8.
let integerArray = [5, 7, 32, 31, 8];
// a double array with three items: 12.4, -13.55 and 67.44
let doubleArray = [12.4, -13.55, 67.44];
// a string array with four items: “Helsinki”, “Lissabon”, “New York” and “Shanghai”
let stringArray = ["Helsinki", "Lissabon", "New York", "Shanghai"];

// ”The value in the index number 3 is: “ and the value from the string array. 
process.stdout.write("\nThe value in the index number 3 is: " + stringArray[3]); 
// “The fourth item in the int array is: “ and the value from the int array.
process.stdout.write("\nThe fourth item in the int array is: " + integerArray[3]); 
// “In the double array there are xx items” where xx is the size of the array
process.stdout.write("\nIn the double array there are " + doubleArray.length + " items"); 
// The whole content of the integer array with a loop.
process.stdout.write("\nInteger array contents:")
for (let i = 0; i < integerArray.length; i++) {
    process.stdout.write("\n" + integerArray[i]);
}
// The whole content of the double array from the last item to the first. 
process.stdout.write("\nDouble array contents last to first:")
for (let i = doubleArray.length - 1; i >= 0; i--) {
    process.stdout.write("\n" + doubleArray[i]);
}
//  in a loop go through the string array and set all the values to be “empty”
for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = "empty";
}
// print it out as a comma separated string
process.stdout.write("\nNew string array: " + stringArray.toString() + "\n\n");