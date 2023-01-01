/* 
Functions ar one of the fundamentals building block in JS. A function in Js is similar to a procedure.
a set of statements that perform a task or calculates a value. 
For example, the following code defines the function:
*/

function square(number) {
  return number * number;
}

/* 
The function square takes one parameter, called number. The function consist of one statement that says to return
the parameter of the function multiplied by itself.
*/

/* 
Parameters are essentially passad to functions by value - so if the code within the body of a function
assigns a completely new value to a parameter that was passed to the function.
When you pass an object as a paramenter, if the function changes the objects properties, that change is
visible outside the function
*/

function myFunc(theObject) {
    theObject.make = "Toyota";
};

const myCar = {
    make: "Honda",
    model: "Accord",
    year: "1998",
};

// x gets the value "Honda"
const x = myCar.make;

// the make property is changed by the function
myFunc(myCar);

// y gets tge value "Toyota"
const y = myCar.make;

/* 
When you pass an array as a parameter, if the function changes any of the arrays values
that change is visible outside the function
*/

function arrFunc(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
arrFunc(arr);
console.log(arr[0]); // 30