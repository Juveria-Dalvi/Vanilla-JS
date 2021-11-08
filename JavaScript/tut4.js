//? VIDEO_4 - TYPE CONVERSION AND TYPE COERCION
console.log(`Tutorial-4`);

//?TYPE CONVERSION

//* String() function
let myVar = String(20);
// console.log(myVar, typeof myVar);

let booleanVar = String(true);
// console.log(booleanVar, typeof booleanVar);

let date = String(new Date());
// console.log(date, typeof date);

let arr = String([1, 2, 3, 4, 5]);
// console.log(arr.length, typeof arr);

//!Type ARRAY LENGTH = ELEMENT'S IN ARRAY(everything including comma(,))
//!Type STRING LENGTH = CHARACTER'S IN ARRAY(only characters not commas(,))

//* .toString() function
let a = 2000;
console.log(a.toString());

//* Number() function
let myNum = Number(`20`);
// myNum = Number([1, 2, 3, 4, 5]);
// myNum = Number(`23ref`); will give NAN if it is mixture of num, char or if it is an array
// myNum = Number(true);
//* true = 1 false = 0
// console.log(myNum, typeof myNum);

//* parseInt and parseFloat function
let myNum1 = parseInt(`2021.435`);
console.log(myNum1, typeof myNum1);

let myNum2 = parseFloat(`2021.435`);
console.log(myNum2, typeof myNum2);

//* .toFixed() function
let myNum3 = parseFloat(`2021.435`);
console.log(myNum3.toFixed(2), typeof myNum3);

//? TYPE COERCION

let myStr1 = Number(`123`);
let myStr2 = 20;
console.log(myStr1 + myStr2);


//? type Conversions 

//* Converting Strings to Numbers
Number("3.14")  //! returns 3.14
Number(" ")     //! returns 0
Number("")      //! returns 0
Number("99 88") //! returns NaN
Number()        //! Returns a number, converted from its argument
parseFloat()    //! Parses a string and returns a floating point number
parseInt()	    //! Parses a string and returns an integer  


//* Converting Numbers to Strings
String('')          //! returns a string from a number variable x
String(123)         //! returns a string from a number literal 123
String(100 + 23)    //! returns a string from a number from an expression
(123).toString()    //! toString() will convert number into string 123
(100 + 23).toString()//! toString() will convert number into string 10023
                    //! Converting Dates to Numbers
                    //! Converting Numbers to Datescal not
                    //! Converting Booleans to Numbers
                    //! Converting Numbers to Booleans

const digit = " "
const text = 123
//* NAN = not a number 
// console.log(Number(digit))
// console.log(parseInt(digit))
// console.log(parseFloat(digit))

// console.log(String(100 + 23))
// console.log(text.toString())

//* javascript operators 

//!JavaScript Comparison Operators
//* (==) equal to
//* (===) equal value and equal type
//* (!=) not equal
//* (!==) not equal value or not equal type
//* (>) greater than
//* (<) less than
//* (>=) greater than or equal to
//* (<=) less than or equal to
//* (?) ternary operator


/* 
JavaScript Logical Operators
&&	logical and
||	logical or
!	logical not
*/

/* 
JavaScript Logical Operators
&&	logical and
||	logical or
*/