// Javascript for Pomodori 
// Problem: How to display a timer 20 - 30 minutues (as assigned by the user) / 5 - 15 break timer

var time; // Variable to hold displayable time
var minutes; // variable to hold minutes
var seconds; // variable to hold seconds

// From user input, gather the time in seconds
function getTimeSeconds(uinput){
	minutes = uinput;
	seconds = uinput * 60; // Formated time, to be returned by the function (user input (which is in minutes) * 60 to get seconds)
	return seconds;
}
