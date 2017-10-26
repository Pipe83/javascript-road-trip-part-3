//********************************//
//--Forest of Function Expressions//
//********************************//


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
