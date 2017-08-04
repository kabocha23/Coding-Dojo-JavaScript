/*Create a function that can take:
start point
end point
skip amount
NOT INCLUDING THE END POINT
IN: start point, end point, skip amount
OUT: All numbers in the range
1. Declare a function
2. create a loop to test the range
3. print numbers in the range
*/

function printRange(start, end, skip){

	for(var i = start; i < end; i += skip) {
	console.log(i);	
	}
}
printRange(2, 10, 2)