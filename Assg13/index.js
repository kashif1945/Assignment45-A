"use strict";
/*Your Own Array:
Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/
var myFavTransport = ['"CG Honda 125 Bike"', '"Honda City Car"'];
for (let i = 0; i < myFavTransport.length; i++) {
    console.log(`I would like to have ${myFavTransport[i]}`);
}
