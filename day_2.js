// program to perform all the arithmetic operations to 2 numbers
var a=90
var b=89
console.log(9%5)


//task 6

var q=10
q+=90
console.log(q)

// task10

var e=89
var f=89.00

console.log(e==f)
console.log(5===5.00)




// Even or Odd number

let r=89
if(r%2!=0)
{
    console.log("Odd Number")
}
else{
    console.log("Even Number")
}


// Ternary Operator

console.log(12>0?"Positive":"Negative")


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
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question("Enter a number: ", function (number) {
    number = parseInt(number); // Convert the input to an integer

    // Check if the number is positive, negative, or zero using ternary operator
    let result = (number > 0) ? "positive" : (number < 0) ? "negative" : "zero";

    console.log(`The number ${number} is ${result}.`);

    // Close the input stream
    rl.close();
});


