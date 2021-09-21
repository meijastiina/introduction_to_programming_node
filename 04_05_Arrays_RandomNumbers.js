    /*
    1.	Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
•	To create random numbers you can use Math.random () function.
2.	Find the largest value in the array using a loop and print it out. 
3.	Find the smallest value in the array using a loop and print it out. 
*/

// Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
let numbers = [];
process.stdout.write("\n\nRandom numbers: ");
for(let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 1000);
    numbers.push(randomNumber);
    process.stdout.write(randomNumber + ", ");
}
// Find the largest value in the array using a loop and print it out
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
process.stdout.write("\nLargest number is " + largest + "\n");

// Find the smallest value in the array using a loop and print it out
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
process.stdout.write("\Smallest number is " + smallest + "\n\n");
process.exit();