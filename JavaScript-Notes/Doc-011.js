//! Note : 10  Rest parameters

//* Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function.
//* The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

//! ***************************************************

//* Syntax of rest parameters
//? function  function_name (...agrs) -
//? {
//?    BLOCK OF STATEMENT
//?  }

//! example -
//? using rest parameters
function add(...nums) {
	console.log(nums);
}
const totalResult = add(10, 20, 30);
console.log(totalResult);

//! ***************************************************

//* Syntax of parameters with rest parameters
//? function  function_name (para_name,...agrs) -
//? {
//?    BLOCK OF STATEMENT
//?  }

//! example -
//? using parameters with rest parameters
const restParams = function (number01, ...myparam) {
	console.log(myparam, number01);
};
restParams(1, 2, 3, 4, 5);

//! example -
//? if we have 1 parameter we can remove braces
const digit = (number01) => {
	return number01;
};

//! example -
//? if we return value in one single line
const total = (number01, number02) => number01 + number02;
const totalResult = total(10, 10);
console.log('totalResult:', totalResult);

//! example -
//? Rest Parameters and Arguments
//? using argument
function buildGame() {
	const parameters = Array.from(arguments);
	console.log('parameters:', parameters);
}

buildGame(1, 2, 3, 4, 5, 7, 2198, 218902901);
