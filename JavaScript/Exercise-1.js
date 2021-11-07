console.log("Exercise-1");

//! => capitilize a string example (Awesome) as u can see only first letter capital rest of them are in lowercase 

//* steps u need to follow

//? 1.. 🚀  create a constant string variable in lowercase letters 

//? 2.. 🚀  use charAt method to return character from string

//? 3.. 🚀  use upperCaseMethod to convert return string from charAt

//? 4.. 🚀  use slice or substring method then use concatenation method to combine & output the result 

//!created string in lowercase
const myVar1="ball";
let myVar2;
let myVar3;
let output;

// myVar2=myVar1.replace('ball', 'Call');

//!charAt method to return character
myVar2=myVar1.charAt(0);
console.log(myVar2);

// ! upperCaseMethod
myVar2=myVar2.toUpperCase();
console.log(myVar2);

//!slice or substring method
myVar3=myVar1.substring(1)
console.log(myVar3);

//!concatenation method
output=myVar2.concat(myVar3)
console.log(output);

//! only create one variable const str = 'learning'
//! n output the result in one line n koii variable create nii krna ok ic str k ilawa

const str ='learning';
console.log(str.charAt(0).toUpperCase() + str.substring(1));

