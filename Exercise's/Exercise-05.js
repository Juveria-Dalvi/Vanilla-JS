// ********************** Exercise 5 STARTS HERE **********************
//! assignment - 01 generate table & identify even & odd numbers 
//! => create two variables
   //? const digit = 2;
   //? const limit = 10
//! => use for loop to generate table 
//! => inside loop use if condition to check value is even or odd 
//! => if value is even then generated table kai agai even show krwana 
//! -> example (2 x 2 = 4 - even number)
//!  -> example (2 x 3 = 6 - odd number)
//! => tip imagine you're performing mathematical divide operation where 2 / 4 jo remainder aata u k imagine this scenario & perform conditions
//? 🚀 best of luck 
//* *************************ANSWER BELOW*****************************

let table;
const digit = 3;
const limit = 10;
let isEven = 'Even number';
let isOdd = 'odd number';
for (let i = 1; i<=limit; i++) {
  table = digit*[i];
  if (table % 2 == 0) {
   console.log(` ${digit} * ${i} = ${table} - ${isEven}`);
} else {
   console.log(` ${digit} * ${i} = ${table} - ${isOdd}`);
}
}
