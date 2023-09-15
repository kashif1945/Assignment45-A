//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.

var array: string[] = ["tyepscript", "Nodejs", "Html", "CSS", "Python"];
array.reverse();
console.log(array);
// intentional error is "Undefined"
console.log(`Intentional Error:${array[6]} `)

console.log(`Valid index:${array[4]}`);