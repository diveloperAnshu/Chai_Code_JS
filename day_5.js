// Function to check whether a number is even or odd

/*function EvenOdd(number){
    if(number%2==0)
    {
        console.log("Even")
    }
    else
    {
        console.log("Odd") 
    }
}

const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a Number: ",function(number){
    number=parseInt(number);
    EvenOdd(number)
    rl.close()
});
*/









//function to find square of a anumber and return the result

/*function numberSquare(number){
    return number*number
}

const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a Number: ",function(number){
    number=parseInt(number)
    let ans=numberSquare(number)
    console.log(ans)
    rl.close()
});*/









// function to concatenate two strings and the strings are provided by the user

/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const concatenateStrings = function (str1, str2) {
    return str1 +" "+ str2;
};

rl.question("Enter the first string: ", function (firstString) {
    rl.question("Enter the second string: ", function (secondString) {
        const result = concatenateStrings(firstString, secondString);
        console.log("Concatenated Result: " + result);
        rl.close();
    });
});*/



//ARROW FUNCTION:-
/*const addition=(num1,num2)=>{
    return num1+num2
}

let ans=addition(3,5)
console.log(ans)*/


//TASK -6

// const check=(str,key)=>{
//     let n=str.length
//     for(let i=0;i<n;i++)
//     {
//         if(str[i]==key)
//         {
//             return true
//         }
//     }
//     return false
// }


// const readline=require('readline')


// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// rl.question("Enter the string: ",function(str){
//     rl.question("Enter the key: ",function(key){
//         let ans=check(str,key);
//         console.log(ans)
//         rl.close()
//     })
// });






// HIGHER ORDER FUNCTION:-

const fun1=(func1,func2,value)=>{
    let ans=func1(value)
    let ans2=func2(ans)
    console.log(ans2)
}

const mul=(value)=>{
    return value*value
}

const div=(ans)=>{
    return ans/2
}

fun1(mul,div,42)

