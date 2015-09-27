
var victims = prompt("How many disaster victims?");
var victimList = [];

var name = '';
var phone = '';
var street = '';

for (var i = 0; i < +victims; i++) {
	name = prompt("Name?");
	phone = prompt("Phone?");
	street = prompt("Street?");
	victimList.push([name, phone, street]);
}

var volunteers = prompt("How many volunteers?");
var volunteersList = [];

for (var i = 0; i < +victims; i++) {
	name = prompt("Name?");
	phone = prompt("Phone?");
	street = prompt("Street?");
	volunteersList.push([name, phone, street]);
}

alert("Victims: " + victimList.length + "\nVolunteers: " + volunteersList.length);
