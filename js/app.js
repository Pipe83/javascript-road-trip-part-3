//**********************************//
//--Forest of Function Expressions--//
//**********************************//


//--------------------------------------------//
//--1.2 CHANGING DECLARATIONS TO EXPRESSIONS--//
//--------------------------------------------//

/* Developers for the Forest of Function Expressions
Theme Park have created a function declaration named
forestFright, but they’ve decided not to keep the
function in memory.

Convert the function from a named function declaration
to an anonymous function expression and assign it to a
variable called runAway. */

var runAway = function () {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};

//--------------------------------------------------//
//--1.3 USING FUNCTION EXPRESSIONS WITH PARAMETERS--//
//--------------------------------------------------//

/* The devs at the Death-Defying Dogwoods have determined
a specific formula for the quantifiable amount of fear
generated at the theme park. Their formula is based on the
amount of people, the amount of rain, and the amount of sharks.
Yes. Sharks. */

var people = 5;
var rain = 7;
var sharks = 7;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

var fear = fearGenerated(people, rain, sharks);

//------------------------------------//
//--1.4 DISPLAYING FUNCTION CONTENTS--//
//------------------------------------//

/* Periodically, the devs at the Haunted Hickory House need to be reminded of their formula. They would like to view the contents of the function, rather than executing it.

Write one line of code to alert the contents of the variable that stores the function to the screen. Here is the fearGenerated function expression assignment for reference:

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
}; */


alert(fearGenerated);

//-----------------------------------------//
//--               1.5                   --//
//--      FUNCTIONS AS PARAMETERS,       --//
//--    ARGUMENTS AND RETURN VALUES      --//
//-----------------------------------------//

/* Well, it stands to reason that some people might not want to experience the Haunted Hickory House if the fear is significantly elevated on that day.

Inside the fearMessage function expression, use conditional statements (e.g., if, else if) to check the integer value of the fear variable, assigned on line 1, and decide whether its value is LOW or MEDIUM.

For each fear range below we want to display a confirmation message with the corresponding message. We can return a call to the confirm function that has a single string argument containing the correct message.

For fear levels less than 200 (i.e., fear < 200):

Fear Level: LOW
Still wanna ride?
For fear levels from 200 through 300 inclusive (i.e., fear >= 200 && fear <= 300):

Fear Level: MEDIUM
Think you'll make it?
Note: You do not need to change the existing code that’s provided for you in the challenge editor.

Use the hints as you get stuck! <--pfft NO WAY  */

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if(fear < 200){
     return confirm("Fear Level: LOW \n 							 Still wanna ride?");
  } else if (fear >=200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM \n 						Think you'll make it?");
  }

};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);

//-----------------------------//
//--1.7 USING MAP WITH ARRAYS--//
//-----------------------------//

/* Over at Maple Mountain, the dev team has received some name data from the customer terminal that they want to use to customize greetings for each of their passengers. But the data consists of an array with many subarrays where the first and last names of each passenger are split up.

They want to take the passengers array and convert those subarrays into strings that contain the first and last name for each passenger.

Create a modifiedNames variable to store our new data.
Assign passengers.map() to the modifiedNames variable. This will allow us to pass in a function to be used on every element in the array.
Pass an anonymous function to map().
The anonymous function should take in arrayCell as a parameter and use that to return a string with the first and last name for a passenger. In other words, if you were to pass in a ["Jason", "Millhouse"] array, the function should return a "Jason Millhouse" string. */


var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function (arrayCell) {return arrayCell[0] + " " + arrayCell[1];});

console.log(modifiedNames);

//--------------------------------//
//--1.8 USING MAP WITH ARRAYS II--//
//--------------------------------//

/* The passengers have arrived at Maple Mountain! Take the modifiedNames array that you produced in the last challenge, and map a new anonymous function on it.

The function should alert the following message to the screen for each passenger in turn:

Yo, <name>!
Note: Since we are creating an alert message, you won’t need to return a value or create any new variables. Normally you would use map’s return value, but this is just for practice. */

var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

modifiedNames.map(function (arrayCell) {alert("Yo, " + arrayCell);});

//---------------------------------//
//--1.9 EXPRESSIONS INSIDE ARRAYS--//
//---------------------------------//

/* The folks over at Poplar Puzzlers need an
array of functions for one of their puzzles.
They’ve requested your help in making the array,
which they would like to be called puzzlers.
The cells of the array should each contain a function,
and these functions–well, what they return–are
listed here in order. Each function has one parameter.

Note input below represents the parameter,
and you will need to convert the math formulas to JavaScript:

Returns 3 * input - 8
Returns (input + 2)3
Returns input2 - 9
Returns input % 4
Use your knowledge of arrays and anonymous function expressions to build this array of functions.

Note: Use parentheses with your return statements if you’re having trouble with the order of operations. */

var puzzlers = [
  function (input) {
    return 3 * input - 8;
  },

  function (input) {
  	return (input + 2) * (input + 2) * (input + 2);
  },

  function (input) {
		return (input * input) - 9;
  },

  function (input) {
  	return input % 4;
  }

];

//-----------------------------------//
//--1.11 CHOOSE THEIR OWN ADVENTURE--//
//-----------------------------------//

/* Ash Adventures has three different “adventures” to choose from, and customers
are prompted for a number at a terminal. The number is stored as userChoice and
then passed into a function called adventureSelector.

Inside the function, you need to return an anonymous function based on the
number that the user selected. Each of your three anonymous functions should
contain a boarding alert message:

If the user selects 1:

You selected the Vines of Doom!
If the user selects 2:

Looks like you want the Lake of Despair!
If the user selects 3:

The Caves of Catastrophe!
Assume the user’s choice has already been stored as 1, 2, or 3,
and is passed in as the userChoice parameter.
Make sure that you return all message functions as anonymous functions,
instead of stored in variables.
You do not need to call the function at the end. */

function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  if(userChoice === 1){
    return  function(){
      alert("You selected the Vines of Doom!");
    };
  }

  else if (userChoice === 2) {
    return function(){
    	alert("Looks like you want the Lake of Despair!");
    };
  }

  else {
    return function(){
    	alert("The Caves of Catastrophe!");
    };
  }

}

//---------------------------------------//
//--1.12 IMMEDIATELY-INVOKED ADVENTURE!--//
//---------------------------------------//

/* Write one line of code that calls adventureSelector, passes it 3 as an argument, and that immediately invokes the function that gets returned. Here’s adventureSelector for your reference:

function adventureSelector(userChoice) {
  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else if (userChoice == 3) {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
} */

adventureSelector(3)();





//----------------------//
//--1.13 QUEUE BUILDER--//
//----------------------//

/* The devs at Poplar Puzzles would like you to treat an array of functions like a Queue, passing the result of each function into the next until the Queue is empty. They’ve sent you the puzzlers Queue of functions, and the following instructions:

Build a function and assign it to a variable named applyAndEmpty.
The function should take in an input number and a queue of functions as parameters.
Using a for loop, call the functions in the queue in order with the input number, where the results of each function becomes the next function’s input.
Once done this loop, return from applyAndEmpty the final function’s result. Additionally, the queue should be empty at this point.
Lastly, call the applyAndEmpty function using the provided start variable and the puzzlers Queue as arguments, and alert the result. */


var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here

var applyAndEmpty = function (input, queue) {
  var length = queue.length;
  for(var i = 0 ; i < length; i ++) {
			input =  queue.shift()(input);
  }
	return input;
};

alert(applyAndEmpty(start, puzzlers));

//------------------------------------//
//--1.14 IMMEDIATELY-INVOKED PUZZLER--//
//------------------------------------//

/* Now the Poplar Puzzle-makers have sent you a puzzle with a new set of functions to use on that puzzle. To display your overwhelming array and function expression mastery, alert the answer to the following question:

“What is obtained when the result of passing 9 into the fourth function of the puzzlers array is then passed into the function whose array index matches the result of passing 3 into the second function of the puzzlers array?”

To really impress them, the expression used in your alert should:

Use just one line of code.
Involve no manual calculation or hard-coded math on your part.
Use indices of arrays to access functions.
Use parentheses to pass in parameters to immediately-invoking functions.
Note:

The required answer is not an example of good style, nor is it intended as such.
The main point is to give you practice with the mechanics of arrays and function calls. */

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
//That's just plain wrong ....



//**********************//
//--Cold Closures Cove--//
//**********************//

//---------------------------//
//--2.2 TRACING A CLOSURE 1--//
//---------------------------//

/* Examine the code below (i.e., manually trace it), in your head determine the final value of the result variable, and alert the value as a number using one line of code.

You must give only 1 number literal as the argument to alert.
Do not do any calculations. So, for example, don’t use *. (Definitely do some math in your head, though!)
Don’t pass in a string.
The number must be a whole number. No decimal points.
(This challenge will give you practice following code with closures, and allow you to understand it better.)

function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3); */

alert(54);
