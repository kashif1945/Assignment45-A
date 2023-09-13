"use strict";
/*Names:
Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time*/
// Define an array called 'names' containing your friends' names
var arrayOfNames = ["jahangir", "Kabir", "Meer", "Jahanzaib", "Abiha"];
var names = arrayOfNames.length;
console.log("Total Length of Array = ", names);
for (let i = 0; i < names; i++) {
    console.log(arrayOfNames[i]);
}
//console.log(arrayOfNames[0]);          // name present at index[0]
// console.log(arrayOfNames[2]);          // name present at index[1]
// console.log(arrayOfNames[3]);          // name present at index[2]
// console.log(arrayOfNames[4]);          // name present at index[3]
