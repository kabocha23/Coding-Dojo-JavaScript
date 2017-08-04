/*Make a function that takes a number of quarters
1 quarter = 1 game
Chance to win: 1 in 100
Win: 50 to 100 quarters (use math.random and math.floor to pick a random #)
While user has quarters, use math.random to determine if they won
If win = true, return # of quarters
Return 0 if all quarters were wasted

IN: number of quarters
OUT: # of quarters if win, 0 if all quarters wasted

Input can be any # of quarters to start the game
Check if user has any quarters
Declare var for winnings
Declare var for loser
Create a loop that randomly generates a win or loss with a 10% win rate
Decrement one quarter each time until win or no quarters
If a win occurs, return remaining quarters plus winnings
If no quarters remain return '0'
*/

function randomChance(quarters)	{
	
	var winnings = Math.floor((Math.random() * 50)+50);
	var loser = "0";
	
	while(quarters > 0) {
		if((Math.random() * 100) < 1) {
			quarters = quarters + winnings;
			return quarters;
		}
		else
		quarters--;
	}
	if(quarters === 0) {
		return loser;
	}
}
randomChance(50);



/* BONUS: Let the user pass the number they are willing to leave with
Return current quarters plus winnings 
OR
Return 0 is all quarters lost

function randomChance(quarters, cutYourLosses)	{
	
	var winnings = Math.floor((Math.random() * 50)+50);
	var loser = "0";
	
	while(quarters > 0) {
		if((Math.random() * 100) < 1) {
			quarters = quarters + winnings;
			return quarters;
		}
		else
		quarters--;
	}
	if(quarters == cutYourLosses) {
		return quarters;
	}
	if(quarters === 0) {
		return loser;
	}
}
randomChance(50, 1);

*/



/* For fun: Autoplay
Let the user pass the number they are willing to leave with
log every win and loss along with the remaining # of quarters


function randomChance(quarters, cutYourLosses)	{
	
	var winnings = Math.floor((Math.random() * 50)+50);
	var loser = "Please insert coins";
	
	while(quarters > 0) {
		if((Math.random() * 100) < 1) {
			quarters = quarters + winnings;
			console.log("Winner!")
			console.log("Plays Remaining: " + quarters);
		}
		else
		quarters--;
		console.log("Shucks, try again")
		console.log("Plays Remaining: " + quarters)
	}
	if(quarters == cutYourLosses) {
		console.log("Cash Out: " + quarters);
	}
	if(quarters === 0) {
		console.log(loser);
	}
}
randomChance(50, 1);

*/