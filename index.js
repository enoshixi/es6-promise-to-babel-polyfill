require("babel-polyfill");

Promise.polyfill = () => { /* noop */ };
Promise.Promise = Promise;

module.exports = Promise;