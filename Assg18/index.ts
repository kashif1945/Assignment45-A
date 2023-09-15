/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed..*/

var placeToVisit:string[]=["Lahore","Multan","Faisalabad","Islamabad","Naran"];
console.log(`Array in Original Order`); 
console.log(placeToVisit);

var arrayAlphabaticlySort=placeToVisit.sort();
console.log("Alphabetical Order without modifying the actual list");
console.log(arrayAlphabaticlySort);

console.log(`Still in Original Order`); 
console.log(placeToVisit);

console.log("reverse alphabetical order without changing the order of the original list");
var arrayReverse=placeToVisit.reverse();
console.log(arrayReverse);

console.log("still in its original order by printing it again"); 
console.log(placeToVisit);

placeToVisit.reverse(); 
console.log("reversed array",placeToVisit)


placeToVisit.reverse()
console.log("Original array",arrayReverse);

placeToVisit.sort();
console.log(placeToVisit)

placeToVisit.reverse()
console.log(placeToVisit)