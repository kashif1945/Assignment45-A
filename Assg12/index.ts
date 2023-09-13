/*Greetings: 
Start with the array you used in Exercise 11, 
but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, 
but each message should be personalized with the person’s name*/

var arrayOfNames: string[] = ['"jahangir"', '"Kabir"', '"Meer"', '"Jahanzaib"', '"Abiha"'];
var names = arrayOfNames.length;
console.log("Total Length of Array = ", names);

for (let i = 0; i < names; i++) {
    console.log(`Hello..! ${arrayOfNames[i]}, I hope you are practcing the typescript Codes`)
}

