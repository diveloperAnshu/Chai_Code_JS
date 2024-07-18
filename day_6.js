
// // task 1
//let numbers=[1,2,3,4,5]
// for(let i=0;i<5;i++)
// {
//     console.log(numbers[i])
// }

// //task 2
// console.log(numbers[0])
// console.log(numbers[numbers.length-1])

// //task 3
// numbers.push(10)
// for(let i=0;i<6;i++)
// {
//     console.log(numbers[i])
// }

// //task 4
// numbers.pop()
// for(let i=0;i<5;i++)
// {
//     console.log(numbers[i])
// }


//task 5
// numbers.shift(13)
// console.log(numbers[0])


// numbers.unshift(12)
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }


//task 7 MAP METHOD IN ARRAY
//let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function (number) {
    return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// filter method in array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]

//reduce method is used here in the array

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15


// for each method is used in the array

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number);
});



// 2-d array

// Function to create a 2-dimensional array
const create2DArray=(rows, cols)=> {
    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
            array[i][j] = parseInt(prompt(`Enter element for row ${i + 1}, column ${j + 1}:`), 10);
        }
    }
    return array;
}

// Get the dimensions of the 2D array from the user
let rows = parseInt(prompt("Enter the number of rows:"), 10);
let cols = parseInt(prompt("Enter the number of columns:"), 10);

// Create the 2D array
let matrix = create2DArray(rows, cols);

// Display the 2D array
console.log(matrix);




