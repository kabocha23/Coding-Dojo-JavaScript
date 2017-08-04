/*
IN: Array
OUT: New Array with numbers only

Create a function
Use a for loop to check each index of array
Use typeof to identify if index is a number
push value to new index if it is a number
return the new array
*/

function numberOnly(arr) {
	var arrnew = [];

	for(var i = 0; i < arr.length; i++) {
		if(typeof arr[i] === "number") {
			arrnew.push(arr[i]);
		}
	}
return arrnew;
}
numberOnly();


/*BONUS: removes numbers from a given array
function noNumbers(arr) {

	for(var i = arr.length-1; i >= 0; i--) {
		if(typeof arr[i] == "number") {
			arr.splice(i, 1);
		}
	}
	return arr;
}
noNumbers();
*/