		---- IF/ELSE CONDITIONALS & SWITCHES IN JAVASCRIPT ----


// Example :
let num = 37;
if (num % 2 !==0) {
	console.log("ODD NUMBER")
}

//* example :- 1
const programmingLang = "JavaScript";
if (programmingLang == "PHP") {
	console.log("I'm learning PHP");
} else {
	console.log("I'm Learning JavaScript");
}

//* example :- 2
const lang = "Python";
if (lang == "PHP") {
	console.log("I'm learning PHP");
} else if (lang == "Python") {
	console.log("I'm Learning Python");
} else {
	console.log("I'm Learning JavaScript");
}

//* example :- 3
const age = '19';
if (age == 21) {
	console.log(`My age is 21`);
} else {
	console.log(`My age is 19`);
}
//! NOTE (==) will only check the value not the typeOf , if you want typeof and value to be the same use(===)

//* example :- 4
const age1 = '19';
if (age === 19) {
	console.log(`My age is 19`);
} else {
	console.log(`Data-Type of age1 does not match`);
}

//* example :- 5
const age = 19;
if (age != 18) {
	console.log(`My age is not 18`);
}
if (age === 19) {
	console.log(`My age is 19`);
} else {
	console.log(`My age is not 19`);
}

//* example :- checking typeOf and value with (not equal to sign)
const age = '21';
if (age !== 18) {
	console.log(`My age is not 18`);
}
if (age !== 21) {
	console.log(`My age is not 21`);
} else {
	console.log(`My age is not 18`);
}

//* example :- To  check if variable is dfined or not defined
if (typeof programmingLang !== 'undefined') {
	console.log(`programmingLang is defined`);

} else {
	console.log(`programmingLang is not defined`);

}

//* example :- boolean variable with if-else
const doesDrive= false;
if (doesDrive) {
	console.log(`You can drive`);

} else {
	console.log(`You cannot drive`);

}

---- example :- boolean variable with && and ||,[AND , OR] ---
// 1- AND(&&)

EXAMPLE :
	const doesDrive= true;
		const age = 14;
		if (doesDrive && age>18) {
			console.log(`You can drive`);

		} else {
			console.log(`You cannot drive`);
		}
// output : You cannot drive

	var a=10;
	var b= 20;
	if (a == 10) && (b== 20) {
		document.write("This will run if both conditions are true");
	}
// output : This will run if both conditions are true

	var x = prompt("Enter your roll number : ");
	if (x== 10) {
		document.write("Name : Rahul");
	}
	// output : Enter your roll number : 10
	// Name : Rahul 

// 2 - OR(||)
const doesDrive= false;
const age = 54;
if (doesDrive || age>18) {
	console.log(`You can drive`);

} else {
	console.log(`You cannot drive`);
}
// ********************************************************
//! Exercise-1 (use 3 conditions with && and || operator)

let myName = `Juveria Dalvi`;
let myShortName = `DJ`;
//* If Atlest ONE Condition is True this console will work fine
if (myName === `Juveria` || myShortName === `JD`) {
	console.log(`Your Name and nickname are unique`);
}
//* If Both Condition is True this console will work fine
else if (myName === `Juveria Dalvi` && myShortName === `DJ`) {
	console.log(`Hii DJ, your name and nickname matches `);
}
//* IF && and || conditions does not matches
else {
	console.log(`Please Enter your Name:  `);
}
// ********************************************************



---- example :- SWITCH STATEMENTS ----
// It is case-sensitive

// syntax : 
// switch(expression){
	
	// 	case expression 1:
	// 		block of statement 1;
	// 		break;
	// 	case expression 2:
	// 		block of statement 2;
	// 		break;
	// 	case expression 3:
	// 		block of statement 3;
	// 		break;
	// 	.
	// 	.
	// 	.
	// 	default:
	// 		default block of instructions;
	// }
	
	
	
	Example :
	
	let myAge=18;
	switch (myAge) {
	case 18:
		console.log(`You are teenager!`);
		break;
		case 25:
			console.log(`You are Adult!`);
			break;
			case 58:
				console.log(`You are too old!`);
				break;
				
				default:
					console.log(`What is your age?`);
				}
				
				Example :
				
				let weekdays=prompt("Enter Number between 1-7 to display weekdays");
				switch (myAge) {
					case 1:
		document.write("Sunday");
		break;
		case 2:
			document.write("Monday");
			break;
	case 3:
		document.write("Tuesday");
		break;
	case 4:
		document.write("Wednesday");
		break;
		case 5:
			document.write("Thursday");
			break;
			case 6:
				document.write("Friday");
				break;
	case 7:
		document.write("Saturday");
		break;
		
		default:
			document.write("Invalid Number");
		}
		
		Example :
		// if you have same value for multiple statements
		
		var officeDays= "Sunday"
switch (officeDays) {
	case "Monday":
		document.write("Working Day");
		break;
		case "Tuesday":
			document.write("Working Day");
			break;
			case "Saturday":
	case "Sunday":
		document.write("Holiday");
		break;
		default:
		document.write(Wrong input);
	}
	
	/* NOTE : 
	1] all the statements will be evaluated if you don't use break statements 
	2] expressions are case sensitive
	*/
	
	---- Nesting Conditions ----
	Example :
	let password = "diwhdfuiw231";
	if (password.length >= 6) {
		if (password.indexOf(' ') === -1) {
			console.log("Valid Password");
		}
		else{
			console.log("Password cannot contain spaces");
		}
	}
	else{
		console.log("Password Must be longer!");
	}


	----  TERNARY OPERATOR [condition? 'true' : 'false';] ---
	example :-
	console.log(age >= 45 ? 'Age is greater then 45' : 'Age is not greater than 45');

	Example :
	let status ='offline';
	let color = status === 'offline'? 'red' : ' green';
						// condition? ifTrue : ifFalse;