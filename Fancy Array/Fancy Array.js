/*Write a function that will print the array to look like this:
0 -> James
1 -> Jill
2 -> Jane
3 -> Jack
*/

function fancyArray() {
	var names = ["James", "Jill", "Jane", "Jack"];
	for(var i = 0; i < names.length; i++){
	console.log(i + " -> " + names[i]);
	}
}
fancyArray()