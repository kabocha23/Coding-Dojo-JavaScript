/*King offered servant $10,000
servant asked for 30 days, given an amount that doubles, starting with a penny
Use for loop to show reward amount after 30 days*/

function forAFewBillion1(){
	var amount = 0.01;
	for(var days = 1; days <=30; days++) {
		amount = amount*2;
	}
	console.log('$' + amount);
}
forAFewBillion1()


/*How many days will it take the servant to make $10,000*/

function forAFewBillion2(){
	var amount = 0.01;
	for(var days = 1; days > 0; days++) {
		amount = amount*2;
	  	if(amount >= 10000){
	  	console.log(days);
	  	break;
    	}
	}
}
forAFewBillion2()


/*How many days will it take the servant to make $1,000,000,000*/

function forAFewBillion3(){
	var amount = 0.01;
	for(var days = 1; days > 0; days++) {
		amount = amount*2;
	  	if(amount >= 1000000000){
	  	console.log(days);
	  	break;
    	}
	}
}
forAFewBillion3()


/*How many days will it take the servant to make Infinity*/

function forAFewBillion4(){
	var amount = 0.01;
	for(var days = 1; days > 0; days++) {
		amount = amount*2;
	  	if(amount >= Infinity){
	  	console.log(days);
	  	break;
    	}
	}
}
forAFewBillion4()