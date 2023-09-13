"use strict";
/*Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase*/
let personName = "muhammad kashif";
let lowerCaseName = personName.toLowerCase();
console.log(lowerCaseName);
let uperCaseName = personName.toUpperCase();
console.log(uperCaseName);
let array = personName.split(" ");
console.log(array);
console.log(array.length);
let titleCaseName = " ";
for (let i = 0; i < array.length; i++) {
    titleCaseName += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase() + " ";
}
console.log(titleCaseName);
