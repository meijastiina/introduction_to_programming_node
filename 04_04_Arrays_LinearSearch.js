/*
Create a program that finds specific items in an array. 
1.	Create two arrays with the following items:
a.	55, 23, 6456, 324, 21, 234, 72, 21
2.	Ask the user what they want to search for in the integer array. 
3.	Loop through the array and compare the values with the input given by the user. 
4.	If the item is found, print out in which index the value was found. 

*/


//1.	Create two arrays with the following items: a.	55, 23, 6456, 324, 21, 234, 72, 21
let numericArray = [55, 23, 6456, 324, 21, 234, 72, 21];
// Ask the user what they want to search for in the integer array. 
process.stdout.write("\nThe number you'd like to search: ");
// Read user input
process.stdin.on("data", function(inputFromUser){
    let numberToSearch = Number(inputFromUser);
    // Loop through the array  
    for (let i = 0; i < numericArray.length; i++) {
        // and compare the values with the input given by the user.
        if (numberToSearch == numericArray[i]) {
            // If the item is found, print out in which index the value was found.
            process.stdout.write(numberToSearch + " was found in index " + i + "\n\n");
            process.exit();
        }
    }
    process.stdout.write(numberToSearch + " was not found\n\n");
    process.exit();
})