//? VIDEO_7 - IF/ELSE CONDITIONALS & SWITCHES IN JAVASCRIPT
console.log(`Tutorial-7`);

//* example - 1
// const programmingLang = `JavaScript`;
// if (programmingLang == `PHP`) {
// 	console.log(`I'm learning PHP`);
// } else {
// 	console.log(`I'm Learning JavaScript`);
// }

//* example - 2
// const lang = `Python`;
// if (lang == `PHP`) {
// 	console.log(`I'm learning PHP`);
// } else if (lang == `Python`) {
// 	console.log(`I'm Learning Python`);
// } else {
// 	console.log(`I'm Learning JavaScript`);
// }

//* example - 3
// const age = '19';
// if (age == 21) {
// 	console.log(`My age is 21`);
// } else {
// 	console.log(`My age is 19`);
// }
//! NOTE (==) will only check the value not the typeOf , if you want typeof and value to be the same use(===)

//* example - 4
// const age1 = '19';
// if (age === 19) {
// 	console.log(`My age is 19`);
// } else {
// 	console.log(`Data-Type of age1 does not match`);
// }

//* example - 5
// const age = 19;
// if (age != 18) {
// 	console.log(`My age is not 18`);
// }
// if (age === 19) {
// 	console.log(`My age is 19`);
// } else {
// 	console.log(`My age is not 19`);
// }

//* example - 6 checking typeOf and value with (not equal to sign)
// const age = '21';
// if (age !== 18) {
// 	console.log(`My age is not 18`);
// }
// if (age !== 21) {
// 	console.log(`My age is not 21`);
// } else {
// 	console.log(`My age is not 18`);
// }


//* example - 7 ,to  check if variable is dfined or not defined
// if (typeof programmingLang !== 'undefined') {
// 	console.log(`programmingLang is defined`);
	
// } else {
// 	console.log(`programmingLang is not defined`);
	
// }

//* example - 8 boolean variable with if-else
// const doesDrive= false;
// if (doesDrive) {
// 	console.log(`You can drive`);
	
// } else {
// 	console.log(`You cannot drive`);
	
// }

//* example - 9 boolean variable with && and ||,[AND , OR]
// 1- AND(&&)	
	// const doesDrive= true;
	// 	const age = 14;
	// 	if (doesDrive && age>18) {
	// 		console.log(`You can drive`);
			
	// 	} else {
	// 		console.log(`You cannot drive`);	
	// 	}

// 2 - OR(||)
	// const doesDrive= false;
	// const age = 54;
	// if (doesDrive || age>18) {
	// 	console.log(`You can drive`);
		
	// } else {
	// 	console.log(`You cannot drive`);
	// }

//! Exercise-1 (use 3 conditions with && and || operator)

let myName = `Juveria Dalvi`;
let myShortName = `DJ`;
//* If Atlest ONE Condition is True this console will work fine
if (myName===`Juveria` || myShortName === `JD` ) {
	console.log(`Your Name and nickname are unique`);

} 
//* If Both Condition is True this console will work fine
 if (myName===`Juveria Dalvi` && myShortName === `DJ`) {
	console.log(`Hii DJ, your name and nickname matches `);
	
} 
//* IF && and || conditions does not matches 
else {
		console.log(`Please Enter your Name:  `);
}