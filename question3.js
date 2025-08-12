// Importing readline for user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Calculates the area of a rectangle.
 * Accepts only positive integers for length and width.
 * Throws an error if inputs are invalid.
 * 
 * @param {number} length - positive integer length of the rectangle
 * @param {number} width - positive integer width of the rectangle
 * @returns {number} area of the rectangle
 */
function calculateArea(length, width) {
    // Validate inputs
    if (!Number.isInteger(length) || !Number.isInteger(width)) {
        throw new Error('Length and width must be integers.');
    }
    if (length <= 0 || width <= 0) {
        throw new Error('Length and width must be positive.');
    }
    return length * width;
}

async function question3() {
    console.log('\n*** Question 3 ***');

    // Rectangle 1: Length = 13, Width = 17
    try {
        const area1 = calculateArea(13, 17);
        console.log(`Area of Rectangle 1 (13 x 17): ${area1} square units.`);
        

    } catch (error) {
        console.error('Error calculating area of Rectangle 1:', error.message);
    }

    // Rectangle 2: Length = 25, Width = 19
    try {
        const area2 = calculateArea(25, 19);
        console.log(`Area of Rectangle 2 (25 x 19): ${area2} square units.`);
    } catch (error) {
        console.error('Error calculating area of Rectangle 2:', error.message);
    }

    rl.close();
}

// Call the function to run the logic
question3();

























































       