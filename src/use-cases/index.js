// Import all use cases
const makeGreet = require('./greet');
// Make use cases
const greet = makeGreet({})
const users = require('./users')
// Export use cases
module.exports = Object.freeze({
    greet,
    users,
});
