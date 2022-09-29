let numbers = [];
process.stdout.write("\n\nPlease enter a number (zero terminates the program): ");
process.stdin.on("data", function(inputFromUser) {
  let data = Number(inputFromUser.toString().trim());
  data?askAgain(data):result()
});
function result(){
  process.stdout.write("\nLargest number is " + numbers.reduce((temp, current) => temp < current?current:temp,numbers[0]) + "\n");
  process.stdout.write("\Smallest number is " + numbers.reduce((temp, current) => temp < current?temp:current,numbers[0])  + "\n\n");
  process.exit();
}
function askAgain(inputFromUser){
  numbers.push(inputFromUser);
  process.stdout.write("\n\nPlease enter a number (zero terminates the program): ");
}
