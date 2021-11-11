// ********************** Exercise 2 STARTS HERE **********************
//? create two const variables
//? Use prompt box and convert string into Number() function
//? concat the two numbers entered in prompt in your console so that you get the Addition of entered number
// ********************** ANSWER BELOW **********************
const userNumber1 = Number(prompt('please enter any number?'));
const userNumber2 = Number(prompt('please enter another Number to add?'));
console.log(userNumber1 + userNumber2);

// ********************** Exercise 2 STARTS HERE **********************
//? create const variables
//? Use any box of your choice and ask user to input Age
//? Show Age should be greater then 18 to join the club
// ********************** ANSWER BELOW **********************

const USER = Number(prompt ("What is your age?"));
if(USER >= 18){
console.log("You can join our club");
}else{
console.log("You can't join our club");
}
