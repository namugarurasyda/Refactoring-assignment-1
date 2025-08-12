const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

// Helper function to get user input
function askQuestion(query) {
 return new Promise(resolve => rl.question(query, resolve));
}

async function question1() {
 console.log('\n*** Question 1 ***');

 const name = await askQuestion('Please enter your name: ');
 console.log(`Hello, ${name}!`);

 rl.close();
}

question1();

module.exports = question1;