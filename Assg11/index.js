"use strict";
/*Names:
Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time*/
var arrayOfNames = ["jahangir", "Kabir", "Meer", "Jahanzaib", "Abiha"];
var names = arrayOfNames.length;
console.log("Total Length of Array = ", names);
for (let i = 0; i < names; i++) {
    console.log(arrayOfNames[i]);
}
