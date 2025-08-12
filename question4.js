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
 * Calculates the area of a triangle using the formula 0.5 * base * height.
 * Accepts only positive numbers for base and height.
 * Throws an error if inputs are invalid.
 * 
 * @param {number} base - positive number base of the triangle
 * @param {number} height - positive number height of the triangle
 * @returns {number} area of the triangle
 */
function calculateTriangleArea(base, height) {
    if (typeof base !== 'number' || typeof height !== 'number') {
        throw new Error('Base and height must be numbers.');
    }
    if (base <= 0 || height <= 0) {
        throw new Error('Base and height must be positive.');
    }
    return 0.5 * base * height;
}

async function question4() {
    console.log('\n*** Question 4 ***');

    // Triangle 1: base = 5, height = 9
    let area1;
    try {
        area1 = calculateTriangleArea(5, 9);
        console.log(`Area of Triangle 1 (base=5, height=9): ${area1} square units.`);
    } catch (error) {
        console.error('Error calculating area of Triangle 1:', error.message);
        rl.close();
        return;
    }

    // Triangle 2: base = 11, height = 15
    let area2;
    try {
        area2 = calculateTriangleArea(11, 15);
        console.log(`Area of Triangle 2 (base=11, height=15): ${area2} square units.`);
    } catch (error) {
        console.error('Error calculating area of Triangle 2:', error.message);
        rl.close();
        return;
    }

    // Compare which triangle covers more area
    if (area1 > area2) {
        console.log('Triangle 1 covers more area than Triangle 2.');
    } else if (area2 > area1) {
        console.log('Triangle 2 covers more area than Triangle 1.');
    } else {
        console.log('Both triangles cover the same area.');
    }

    rl.close();
}

// Run the function to see the output
question4();