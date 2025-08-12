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

function calculateCircleArea(radius) {
    if (typeof radius !== 'number') {
        throw new Error('Radius must be a number.');
    }
    if (radius <= 0) {
        throw new Error('Radius must be positive.');
    }
    return Math.PI * radius * radius;
}

async function question5() {
    console.log('\n*** Question 5 ***');

    try {
        const radius1 = 8;
        const radius2 = 13;

        const area1 = calculateCircleArea(radius1);
        const area2 = calculateCircleArea(radius2);

        console.log(`Area of Circle 1 (radius = ${radius1}): ${area1.toFixed(2)} square units.`);
        console.log(`Area of Circle 2 (radius = ${radius2}): ${area2.toFixed(2)} square units.`);

        // Calculate the percentage of Circle 1's area relative to Circle 2's area
        const percentage = (area1 / area2) * 100;
        console.log(`Circle 1 takes up ${percentage.toFixed(2)}% of the area inside Circle 2.`);



    } 
    catch (error) {
        console.error('Error calculating areas:', error.message);
    }

    rl.close();
}

// Run the function to see the output
question5();