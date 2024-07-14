// program to perform all the arithmetic operations to 2 numbers
var a = 90
var b = 89
console.log(9 % 5)


//task 6

var q = 10
q += 90
console.log(q)

// task10

var e = 89
var f = 89.00

console.log(e == f)
console.log(5 === 5.00)




// Even or Odd number

let r = 89
if (r % 2 != 0) {
    console.log("Odd Number")
}
else {
    console.log("Even Number")
}


// Ternary Operator

console.log(12 > 0 ? "Positive" : "Negative")


// function checkNumber(num)
// {
//     var result=(num>0)?"Positive":(num<0)?"Negative":"Zero"
//     return result
// }

// let number = prompt("Enter a number:");
// number = parseInt(number);
// console.log(`${number} is a ${checkNumber(num)}`)


const readline = require('readline');

// Create an interface for reading input from the console
const rol = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rol.question("Enter a number: ", function (number) {
    number = parseInt(number); // Convert the input to an integer

    // Check if the number is positive, negative, or zero using ternary operator
    let result = (number > 0) ? "positive" : (number < 0) ? "negative" : "zero";

    console.log(`The number ${number} is ${result}.`);

    // Close the input stream
    rol.close();
});

// EXPLANATION FOR THE ABOVE CODE BIT BY BIT

//Certainly! The rl.question method in Node.js is part of the readline module, which provides an interface for reading data from a Readable stream(such as process.stdin).Here's a step-by-step explanation of how rl.question works:




const readline = require('readline');
/*This line imports the readline module, which is a built -in Node.js module used to handle reading from the console.
Creating an interface:*/


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*readline.createInterface creates an interface for reading data from process.stdin(standard input) and writing data to process.stdout(standard output).
    input: process.stdin specifies that the input stream will be the standard input(the console).
        output: process.stdout specifies that the output stream will be the standard output(the console).
Using rl.question:*/


rl.question("Enter a number: ", function (number) {
    /*rl.question displays a query("Enter a number: ") to the user and waits for the user's input.
Once the user provides the input and presses Enter, the callback function is executed.
The input provided by the user is passed as an argument(number) to the callback function.
Processing the input:*/


    number = parseInt(number); // Convert the input to an integer
    //The input(which is a string) is converted to an integer using parseInt.
    //Using the ternary operator to determine if the number is positive, negative, or zero:


    let result = (number > 0) ? "positive" : (number < 0) ? "negative" : "zero";
//This line uses a nested ternary operator to determine if the number is positive, negative, or zero and stores the result in the result variable.
//Displaying the result:

    

    console.log(`The number ${number} is ${result}.`);
//This line prints the result to the console.
//Closing the interface:



    rl.close();
});
rl.close() //closes the readline interface, which stops accepting input and ends the program.


