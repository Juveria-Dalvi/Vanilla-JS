// ********************** Exercise 3 STARTS HERE **********************
//! 1 . const str = "hi i am learning javascript from scratch i know what you're thinking";
//! 2. use string method split(' ') to convert text into an array
//! 3. use loop to iterate array
//! 4.. use charAt() & uppercase method to uppercase first letter
//! 5.. use substring method to get remaining letters except 1
//! 6.. then use concatation to combine
//! 7 last use join(' ') string method to convert array to text again  
//? 🚀 best of luck 


//* *************************ANSWER BELOW*****************************
const str = "hi i am learning javascript from scratch i know what you're thinking";
let answer=[];
// console.log(str);

let str2= (str.split(' '));
// console.log(str2);

for (let i = 0 ; i < str2.length; i++)
{
  const str3 = str2[i];
  let newVar1 = str3.charAt('0').toUpperCase();
  let newVar2= str3.substring('1');
  
  let myAnswer = newVar1.concat(newVar2);
  // console.log(myAnswer);
  
answer.push(newVar1 + newVar2);
  
}
 console.log(answer.join(' '))

// ********************** Exercise 3 STARTS HERE **********************
//? created table of 2 * 2= 1 ..
//* *************************ANSWER BELOW*****************************
let num1=2;
const num2=[1,2,3,4,5,6,7,8,9,10];
for(i=0;i<num2.length;i++){
  let j=num2[i];
let table =(`${num1} * ${j} = ${num1*j}`);
console.log(table)
}






