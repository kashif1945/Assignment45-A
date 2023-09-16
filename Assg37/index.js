"use strict";
// 37. Large Shirts: Modify the make_shirt() function 
//so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size = "Large", message = "I love TypeScript") {
    console.log(`Your size of T-shirt is ${size} and printed text is "${message}"`);
}
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "Hello, World!");
