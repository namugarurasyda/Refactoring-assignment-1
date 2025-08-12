// Importing readline for user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to get user input
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

/**
The function below takes in input of length and width from a user to calculate the area of the rectangle. Complete the function and print out the result.
*/
async function question2() {
    console.log('\n*** Question 2 ***');

    // Prompt the user for length and width, then convert to numbers
    const lengthInput = await askQuestion('Enter the length: ');
    const widthInput  = await askQuestion('Enter the width: ');

    // Convert to numbers (allow decimal values)
    const length = Number(lengthInput.trim());
    const width  = Number(widthInput.trim());

    // Validate inputs
    if (Number.isNaN(length) || Number.isNaN(width)) {
        console.log('Invalid input: length and width must be numeric.');
        rl.close();
        return;
    }
    if (length < 0 || width < 0) {
        console.log('Invalid input: length and width must be non-negative.');
        rl.close();
        return;
    }

    const area = length * width;
    console.log(`The area of the object is ${area} square units.`);


    rl.close();
}

// If you want to run the function when this script is executed:
question2();
