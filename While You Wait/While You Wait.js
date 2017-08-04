/*INSTRUCTIONS: 
for every day, print how many days are left
more than 30 days - print a sad message
less than 30 days - print a happy message
less than 5 days - print excited message
on your birthday - have a party!*/



function daysUntilMyBirthday(days) {
 	for(var i = days; i >= 0; i--){
		if(i === 0) {
			console.log("IT'S MY TIME BABYYYYY!!!")
		}
		else if(i < 5 && days > 1) {
			console.log("ONLY " + i + " DAYS LEFT... IT'S ALMOST HERE!!!")
		}
		else if(i < 30) {
			console.log(i + " days left until my bday, getting closer...!")			
		}
		else if(i >= 30) {
			console.log(i + " days left until my bday, how sad...!")
		}
	}
}
daysUntilMyBirthday(60);
