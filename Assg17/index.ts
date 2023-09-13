/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Start with your program from Exercise 16. 
Add a new line that prints a message saying that you can invite only two people for dinner.
Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.*/

var guestList: string[] = ["Abiha", "Meer", "Kabir", "Jahangir", "Jahanzaib", "Muneeb"];
console.log(guestList); // print original array of Persons names

guestList.forEach((msgToPerson) => console.log(`${msgToPerson} = Sorry for inconvinence, I can't invite for the dinner.`))

for (let i = guestList.length; 2 < i; i--) {
    guestList.pop() // removing the persons from array EXCEPT 2 Persons
}
console.log(guestList)

guestList.forEach((stillInvitedPersons) => console.log(`${stillInvitedPersons} you are only invited for the dinner.`));

guestList.splice(0,2); // removing the persons from array , empty list
console.log(guestList);