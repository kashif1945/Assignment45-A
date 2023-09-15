"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.*/
var guestList = ["Abiha", "Meer", "Kabir", "Jahangir", "Jahanzaib", "Muneeb"];
console.log(guestList); // Original array print
guestList.push("Kashif"); // Add new guest at the end of array.
guestList.unshift("Ali"); // Add new guest at the start of array.
guestList.splice(guestList.length / 2, 0, "Atif"); // Add new guest to the middle of array at index#3
guestList.forEach(element => console.log(`Dear All, I found a big Dinner Table=  ${element}`)); // New update Aarry Print
console.log(guestList);
