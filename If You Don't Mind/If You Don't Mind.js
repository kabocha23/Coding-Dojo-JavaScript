	var HOUR = 4;
	var MINUTE = 5;
	var PERIOD = "PM";

	if (MINUTE < 30 && PERIOD == 'AM') {
		console.log("It's",'just after',HOUR,'in the morning')
	}
	if (MINUTE > 30 && PERIOD == 'AM') {
		console.log("It's",'almost',HOUR + 1,'in the morning')
	}

	if (MINUTE < 30 && PERIOD == 'PM') {
		console.log("It's",'just after',HOUR,'in the evening')
	}
	if (MINUTE > 30 && PERIOD == 'PM') {
		console.log("It's",'almost',HOUR + 1,'in the evening')
	}


	if (MINUTE == 45 && PERIOD == 'AM') {
		console.log("It's a",'quarter after',HOUR,'in the morning')
	}
	if (MINUTE == 45 && PERIOD == 'PM') {
		console.log("It's a",'quarter after',HOUR,'in the evening')
	}


	if (MINUTE == 30 && PERIOD == 'AM') {
		console.log("It's",'half past',HOUR,'in the morning')
	}
	if (MINUTE == 30 && PERIOD == 'PM') {
		console.log("It's",'half past',HOUR,'in the evening')
	}


	if (MINUTE == 5 && PERIOD == 'AM') {
		console.log("It's",'5 after',HOUR,'in the morning')
	}
	if (MINUTE == 5 && PERIOD == 'PM') {
		console.log("It's",'5 after',HOUR,'in the evening')
	}
