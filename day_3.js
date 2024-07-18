// task 1

const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

rl.question("Enter a Number: ",function(number){
    number=parseInt(number)
    if(number>0)
    {
        console.log("Positive")
    }
    else if(number<0)
    {
        console.log("Negative")

    }
    else{
        console.log("Zero")
    }
    rl.close()
})


