//********************* Exercise-7*************************
//! Create  if ,else-if , else conditon to display grades of 4 students

// *********************ANSWER BELOW***********************

let MyName = prompt('Enter your roll call :');
let Sania = 74;
let Ali = 35;
let Shubham = 20;
if (MyName == Sania) {
	console.log('You are Passed Miss. Sania!!');
} else if (MyName == Ali) {
	console.log('You are Just Passed Ali');
} else if (MyName == Shubham) {
	console.log('Study hard Shubham, You are Failed!');
} else {
	console.log('Others are Successfully Passed with Grade A!!');
}
