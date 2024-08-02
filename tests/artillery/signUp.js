const { generateUser } = require('../data/userGenerator.js');
const { testSignUp } = require ('../commands/signUp.js');

async function artilleryScript(page) {
    const user = generateUser();
    await testSignUp(page, user);
}

module.exports = {
    artilleryScript
}