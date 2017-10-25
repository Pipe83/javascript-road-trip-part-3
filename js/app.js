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
