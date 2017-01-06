require("babel-polyfill");

Promise.polyfill = function () { 
	/* noop */ 
};
Promise.Promise = Promise;

module.exports = Promise;