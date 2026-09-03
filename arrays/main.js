//basic array in js 
const students = ["Anmol", "john", "jane"];

//printing the array and its length
console.log(students);
console.log(students.length);

//adding new element in the array
students.push("james");
console.log(students);

//removing the last element from the array
students.pop();
console.log(students);

//changing the value of an element in the array
students[0] = "Anmol chauhan  ";
console.log(students);

//pushing multiple elements in the array
students.push("jay", "james", "jane");
console.log(students);

//pushing multiple and different elements in the array
students.push(1, 2, 3, "hello");
console.log(students); 


//returns the index of the element in the array
console.log(students.indexOf("Anmol chauhan  "));
