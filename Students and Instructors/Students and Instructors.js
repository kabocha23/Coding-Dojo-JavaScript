/* PART I
IN: Array of Objects
OUT:
Michael Jordan
John Rosales
Mark Guillen
KB Tonel

Create a function that calls specific objects in an array
*/

var students = [ 
	 {first_name:  'Michael', last_name : 'Jordan'},
	 {first_name : 'John', last_name : 'Rosales'},
	 {first_name : 'Mark', last_name : 'Guillen'},
	 {first_name : 'KB', last_name : 'Tonel'}
]

function studentsAndInstructors() {

	for (var i = 0; i < students.length; i++) {
		console.log(students[i].first_name, students[i].last_name)
	}
}
studentsAndInstructors()

/* PART II
IN: Object containing two arrays of objects
OUT: 
Students
1 - MICHAEL JORDAN - 13
2 - JOHN ROSALES - 11
3 - MARK GUILLEN - 11
4 - KB TONEL - 7
Instructors
1 - MICHAEL CHOI - 11
2 - MARTIN PURYEAR - 13

Create a function that calls specific objects in an array
print them in a numbered list including the number of characters
*/

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

function studentsAndInstructors2() {
	
	console.log('Students');
	for (var i = 0; i < users.Students.length; i++) {
	console.log((i + 1) + " - " + users.Students[i].first_name, users.Students[i].last_name +  ' - ' + (users.Students[i].first_name.length + users.Students[i].last_name.length));
	}
	
	console.log('Instructors');	
	for (var h = 0; h < users.Instructors.length; h++) {
	console.log((h + 1) + " - " + users.Instructors[h].first_name, users.Instructors[h].last_name + ' - ' + (users.Instructors[h].first_name.length + users.Instructors[h].last_name.length));
	}
	return
}
studentsAndInstructors2();
