// 34. Pizzas: Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a for loop to print the name of each pizza.

var favPizzas: string[] = ["chicken fajita", "chiken tika", "Pepperoni"];

for (let i = 0; i < favPizzas.length; i++) {
    console.log(favPizzas[i]);

}
// a. Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
var favPizzas: string[] = ["chicken fajita", " chiken tika", "Pepperoni"]

for (let i = 0; i < favPizzas.length; i++) {
    console.log("i like", favPizzas[i], "pizza");

}

