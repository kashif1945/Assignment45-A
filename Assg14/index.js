"use strict";
/*Guest List:
If you could invite anyone, living or deceased, to dinner,
who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
// const numbers: number[] = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//   console.log(number);
// });
//--------------------------------------------------------------------------------
var guestList = ['"Abiha"', '"Meer"', '"Kabir"', '"Jahangir"', '"Jahanzaib"'];
var arrayGuests = guestList.length;
console.log(arrayGuests);
guestList.forEach((string) => {
    console.log(string, "To Night, I would like to invite you at a dinner");
});
