/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/


var fruits: string[] = ["Banana", "orange", "mango", "strawberry", "apple"]

var favorite_fruits: string[] = ["Banana", "mango", "apple"];

for (let i = 0; i < fruits.length; i++) {
    if (fruits.includes(favorite_fruits[i])) {
        console.log(`you really like ${fruits.includes(favorite_fruits[i])}`)
    }
}