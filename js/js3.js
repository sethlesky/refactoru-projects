var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};

var phone = prompt("Please enter your phone number (it won't be used for spam)");

var phone_arr = phone.split('-');
if (phone[3] !== '-' || phone[7] !== '-') {
	alert(false);
} else if ( !isNumber(phone_arr[0]) || !isNumber(phone_arr[1]) || !isNumber(phone_arr[2]) ) {
	alert(false);
} else if (phone.length !== 12) {
	alert(false);
} else {
	alert(true);
}

var birthdate = prompt("What's your birthday?");
var date = birthdate.split('/');

if (birthdate.length !== 8) {
	alert(false);
} else if (birthdate[2] !== '/' || birthdate[5] !== '/'){
	alert(false);
} else if(!isNumber(date[0]) || !isNumber(date[1]) || !isNumber(date[2])){
	alert(false);
} else {
	alert(true);
}

var state = prompt("What's your state?");
if (state.length !== 2) {
	alert(false);
} else if (state.toUpperCase() !== state) {
	alert(false);
} else {
	alert(true);
}

var married = prompt("Are you married?");
if (married.toUpperCase == 'YES' || married.toUpperCase == 'NO') {
	alert(true);
} else {
	alert(false);
}

