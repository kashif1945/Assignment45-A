"use strict";
//• Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
// var guestList: string[] = ['"Abiha"', '"Meer"', '"Kabir"', '"Jahangir"', '"Jahanzaib"'];
// var arrayGuests = guestList.length;
// console.log(arrayGuests);
// guestList.forEach((string) => {
//     console.log(string, "To Night, I would like to invite you at a dinner");
// })
//--------------------------------------------------------------------------------------
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need tlo send out a new set of invitations.
 You’ll have to think of someone else to invite.*/
var guestList = ["Abiha", "Meer", "Kabir", "Jahangir", "Jahanzaib"];
console.log(guestList);
let personCantCome = '"Jahangir"';
console.log("The person who are NOT coming for Dinner = ", personCantCome);
guestList.splice(3, 1, "Kashif"); // Replacing Name kabir with kashif at Index#3 
for (let i = 0; i < guestList.length; i++) {
    console.log(`The person who are coming for Dinner = , ${guestList[i]}`);
}
console.log(guestList);
