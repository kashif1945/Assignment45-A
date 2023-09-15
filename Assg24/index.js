"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let myName = "Muhammad Kashif";
console.log(myName == "Muhammad Kashif");
var nam1 = "Muhammad Kashif";
var nam2 = "muhammad kashif";
console.log(nam1.toLowerCase() == nam2);
console.log("writing name in lower case and testing it");
console.log(myName === "muhammad kashif");
let num = 10;
console.log(`10 > 20 = ${num > 20}`);
console.log(`10 > = 10 ${num >= 10}`);
console.log(`10 < 20 = ${num < 20}`);
console.log(`10 < = 10 ${num <= 10}`);
console.log('"AND": "10>10 && 10<20 =', num > 10 && num < 20);
console.log('"OR": "10>10 || 10<20 =', num > 10 || num < 30);
const fruits = ["Apple", "Bannana", "Cherry"];
console.log(fruits);
console.log("Bannana is Present in Array=", fruits.includes("Bannana"));
console.log(" '!' Will give Reverse Answer : ", !fruits.includes("Bannana")); //  Test whether an item is not in a array, '!' mark 
console.log("Bannana is Present at Array Index# =", fruits.indexOf("Bannana"));
