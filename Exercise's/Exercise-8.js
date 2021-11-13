//********************* Exercise-8*************************
//! Use Switch Statements and ask user for input from 1 to 7 and return them days (Sunday,Monday,Tuesday,Wednesday,Thursday,Friday & Saturday)

// *********************ANSWER BELOW***********************

var Days = Number(
	prompt('Please choose Number between 1 to 7 to display Days')
);
switch (Days) {
	case 1:
		document.write('Day 1 is Sunday');
		break;
	case 2:
		document.write('Day 2 is Monday');
		break;
	case 3:
		document.write('Day 3 is Tuesday');
		break;
	case 4:
		document.write('Day 4 is Wednesday');
		break;
	case 5:
		document.write('Day 5 is Thursday');
		break;
	case 6:
		document.write('Day 1 is Friday');
		break;
	case 7:
		document.write('Day 7 is Saturday');
		break;
	default:
		document.write(
			'You Entered Wrong Number, There are Only 7 days in a week!!'
		);
}
