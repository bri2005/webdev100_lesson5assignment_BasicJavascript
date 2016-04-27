/**
  
  Cheatsheet for Javascript 

**/

/*
 * How to set Variables - JS doesn't need to be told the type
 *
*/

var myStringVariable = "banana";
var myNumberVariable = 9999;
var myBooleanVariable = true;

/*
 *
 * Debugging (alerts, comments, the console)
 *
*/

//
// Debug via alerts (pop ups a window in the browser)
//

alert("The value of myStringVariable is" + myStringVariable);
alert("The value of myNumberVariable is" + myNumberVariable);
alert("The value of myStringVariable is" + myBooleanVariable);

//
// Debug via logging to HTML.. 
//

//Set the element you want to update with the debug message..
<html>
...
<span id="debugMessage"></span>
...
</html>

//have the JS function you want to check update the HTML element by using the DOM (document)

function functionIWantToDebug() {
	document.getElementById('debugMessage').innerHTML = "This is a debug message";
}


// Debug via the console..
function functionIWantToDebug() {
	console.log("This is a debug message");
}


/**
 * 
 * Different data types (all 5 of them - Strings, Numbers, Boolean, Objects and Undefined (No value))
 *
 */

//Strings
var firstName = "Brian";

//Numbers - everything is a float in JS
var age = 34;

//Boolean
var isBrianAGreatCoder = false;

//Object
var person = {fistName: "Brian", lastName: "Robertson", age: 34};

//Undefined
var myUndefinedVar;

/* 
 * 
 *  Arrays
 *
 */

//Can be initialised with the same or different data types
var myArrayOfFirstNames = ["Brian", "Johnny", "David"];

var myArrayOfRandomness = ["Robertson", 3568.2, true, "Monkeys"];

//Can be array of arrays of different lengths..

var myArrayOfFirstNamesAndRandomness = [myArrayOfFirstNames, myArrayOfRandomness];

//Getting data out of an array - similar to Java..

console.log(myArrayOfFirstNames[0]); // "Brian"
console.log(myArrayOfRandomness[3]); // "Monkeys"

//Getting data out of an array of arrays.. first index to get the array, next index to get the item

console.log(myArrayOfFirstNamesAndRandomness[0][2]); // "David"
console.log(myArrayOfFirstNamesAndRandomness[0][3]);// undefined (out of bounds - first array is length 3)
console.log(myArrayOfFirstNamesAndRandomness[1][1]); // 3568.2

/*
 *  
 * Testing
 *
 */

// Can use logical statements to compare values..

//Comparing Strings - remember to use 3 equal signs! "===" as "==" can give false results
var myFavouriteColour = "Blue";
var sportsTeamColour = "Blue";

if (myFavouriteColour === sportsTeamColour) { console.log("I will probably like this team.")}

//Comparing numbers..

var myAge = 34;
var mySistersAge = 32;

if (myAge >= mySistersAge) { console.log("I am older than my sister.")}

//Can also test to see whether objects are a specific data type before trying something stupid..

var myArrayOfRandomness = ["Brian", 14, true, false];

var age = myArrayOfRandomness[1];
var ageType = typeof age;

//make sure it's something of type number we've grabbed before attempting to add 20 to it
if (ageType === "number") {
	//Add 20 years to it
	age = age + 20;
	console.log("New age is "+age);
}
else {
	console.log("Err.. this: "+age+" isn't a number, it's a "+ageType+"...not adding.");
}

/*
 * 
 * Logic
 *
 */

//Use if and else statements to create logical paths..

var waterTemp = 101;
var waterState;

if (waterTemp <= 0) {
	waterState = "Solid";
} 
else if (waterTemp < 100) { 
	waterState = "Liquid"
} 
else waterState = "Gas";

console.log("Water temp is "+waterTemp+" and exists as a "+waterState); 

/*
 *
 * Functions
 *
 */

//Functions can be used to abstract code/functionality..

//Can be used to calculate and return a value..

function giveMeTheProductOf (param1,param2) {
	return param1 * param2;
}

console.log(giveMeTheProductOf(5,2));  //will print out 10

//can be used to call a function on an action in HTML..

<html>
..
<button id="myButton" onclick="updateButtonClickedStatus()">Click me</button>
..
<span id="buttonStatus"></span>
..
</html>

function updateButtonClickedStatus() {
	document.getElementById('buttonStatus').innerHTML = "Button was clicked";
}





