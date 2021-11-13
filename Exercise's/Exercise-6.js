//****************************************** Exercise-6********************************************
//! create if else condition with logical operators (use 3 conditions with && and || operator)

// *********************************************ANSWER BELOW******************************************

let myName = `Juveria Dalvi`;
let myShortName = `DJ`;
//* If Atlest ONE Condition is True this console will work fine
if (myName === `Juveria` || myShortName === `JD`) {
	console.log(`Your Name and nickname are unique`);
}
//* If Both Condition is True this console will work fine
if (myName === `Juveria Dalvi` && myShortName === `DJ`) {
	console.log(`Hii DJ, your name and nickname matches `);
}
//* IF && and || conditions does not matches
else {
	console.log(`Please Enter your Name:  `);
}
