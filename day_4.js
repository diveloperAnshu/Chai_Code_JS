for (let i = 1; i <= 5; i++) { // Outer loop for the number of rows
    let star = ''; // Initialize an empty string for each row
    for (let j = 0; j < i; j++) { // Inner loop to add stars
        star += '*'; // Add a star to the string
    }
    console.log(star); // Print the row
}


// when you do console.log its prints one line and then comes to the second line 
// so for javascript first take all the input in a string and then concole.log at once the string
