"use strict";
/*Favorite Fruit: Make a array of your favorite fruits,
//and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
// var favFruits: string[] = ["Banana", "orange", "mango", "strawberry", "apple"]
// var favorite_fruits: string[] = ["Banana", "mango", "apple"];
// for (let i = 0; i < favFruits.length; i++) {
//     if (favFruits.includes(favorite_fruits[i])) {
//         console.log(`you really like ${favFruits.includes(favorite_fruits[i])}`)
//     }
// }
// Create an array of favorite fruits
const favorite_fruits = ["banana", "strawberry", "apple"];
// Check if "banana" is in the array
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
// Check if "strawberry" is in the array
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
// Check if "apple" is in the array
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
// Check if "mango" is in the array
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangos!");
}
// Check if "orange" is in the array
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
