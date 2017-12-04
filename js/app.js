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
//--2.2 TRACING A CLOSURE I--//
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

//----------------------------//
//--2.3 TRACING A CLOSURE II--//
//----------------------------//

/* We’ve made the code a little trickier this time. Again, calculate the final value of the result variable and alert the value as a number using one line of code.

function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2); */

alert(40);

//-----------------------------//
//--2.4 TRACING A CLOSURE III--//
//-----------------------------//

/* Moar tricky. Moar tough! Again, calculate the final value of the result variable and alert the value as a number using one line of code. Hehe, good luck with this one!

function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2); */


alert(122);

//--------------------------//
//--2.5 BUILDING A CLOSURE--//
//--------------------------//

/* The Dev Girls at the Cold Closures Cove sometimes need to provide warnings to travelers about various obstacles that sometimes float into the Cove. They need you to prepare a very efficient warning maker that will allow them to create only the warnings they need, and only when they need it. Closures to the rescue!

They’ve started a function called warningMaker with a parameter called obstacle. Within this function, return an anonymous function that displays a specific alert message based on the specific obstacle encountered. The format of the message should be as follows:

Beware! There have been <obstacle> sightings in the Cove today!
Note: You do not need to call the warningMaker function. */

function warningMaker(obstacle) {
  return function () {
  	alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

//-------------------------//
//--2.6 USING A CLOSURE I--//
//-------------------------//

/* The Cove’s Dev Girls just got reports of icebergs in the area!

Build a warning message by passing a "iceberg" obstacle as an argument into the warningMaker function.
Store the results in a new variable called icebergAlert.
Call the icebergAlert function to view the warning message.
Note: You do not need to change the existing warningMaker function. */

function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

// build your warning message here
var icebergAlert = warningMaker("iceberg");

icebergAlert();


//-----------------------------//
//--2.7 BUILDING A CLOSURE II--//
//-----------------------------//

/* The Dev Girls admire your closure mastery. To test your might, they’ve asked you to modify the warningMaker function in order to announce:

The number of obstacles. This must be the first parameter.
The specific location of the obstacle found. This must be the second parameter.
In other words, they want to pass a specific number and a specific location to the function, and have those values become part of the alert message for the obstacle being passed into the warningMaker function.

Update the warningMaker function so that it follows the format below. Use the parameters to take the names of the bracketed placeholders:

Beware! There have been <obstacle> sightings in the Cove today!
<number> have been spotted at the <location>!
Note: Pay close attention to whitespace! You do not need to call the warningMaker function. */

function warningMaker(obstacle) {
  return function(number, location) { // set parameters
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " + location + "!"

    );
  };
}


//--------------------------//
//--2.8 USING A CLOSURE II--//
//--------------------------//

/* You’ve impressed the Dev Girls with the improved functionality of your warning messages. They’ve built a few warning generators and are ready for any danger that comes up. Suddenly, the radio crackles to life:

Dev Girls, mayday. Dev Girls, mayday!

I’ve got 6 killer penguins on the loose near the "Ice Caves"!

And 1 snow yeti rampaging across the "Blizzard Beach"!

Over and out!

Review the already-built warning messages, and call the appropriate functions for this situation, making sure to pass in the appropriate parameters. You’ll need only two lines of code. */


function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

// call the two functions here
killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");



//---------------------------------//
//--2.10 CHANGING A BOUND VALUE I--//
//---------------------------------//

/* The Cold Closures Cove devs are troubled by the amount of the warnings that have been coming back lately. Some obstacles have resulted in many warnings, while others have not.

They’d like you modify the warningMaker function to internally count the number of times a particular warning has been issued.

In order to accomplish this, you’ll need to set up a count variable and figure out how to increment it appropriately within the context of your functions.

Lastly, add that count to the alert message. The format of the message should match the following:

Beware! There have been <obstacle> sightings in the Cove today!
<number> have been spotted at the <location>!
This is alert #<count> today for <obstacle> danger. */

function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count ++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          // finish the warning message here
          "This is alert #" + count + " today for " + obstacle + " danger."
    );
  };
}


//--------------------------------//
//--2.11 HIGHWAY TO DANGER ZONES--//
//--------------------------------//

/* The Dev Girls need you to store each location so that a list of danger zones for each obstacle can be reported with every new warning.

Inside the warningMaker function:

Store each location in an array called zones.
Add each zone to the list string.
Report the list of danger zones with the alert message in this format:
Beware! There have been <obstacle> sightings in the Cove today!
<number> have been spotted at the <location>!
This is alert #<count> today for <obstacle> danger.
Current danger zones are:
<zone1>
<zone2>
<zone3>
... */


function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // add each location to the zones array
    zones.push(location);
    // add each zone to the list string
    for(var i = 0; i < zones.length; i++){
    	list += zones[i] + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          // finish the warning message here
          "Current danger zones are:\n" + list

    );
  };
}

//-----------------------------------//
//--2.12 JUST KEEP TRACK OF IT ALL!--//
//-----------------------------------//

/* Well, it’s nice for new travelers to know where the danger zones are, but what if some of them are thrill-seekers? They might actually want to visit the zones that have the highest number of obstacles.

We already have a list of danger zones, and now the Dev Girls at the Cove want you to add a number alongside each of the locations.

Using the zones array, push a sub-array containing both the location and number for each obstacle.
Inside the for loop, find a way to access those values from the zones array in order to add them to the list string.
The final alert should be displayed in the following format:
Beware! There have been <obstacle> sightings in the Cove today!
<number> have been spotted at the <location>!
This is alert #<count> today for <obstacle> danger.
Current danger zones are:
<zone1> (<number1>)
<zone2> (<number2>)
<zone3> (<number3>)
...
Note: You do not need to change the alert message. You can complete the challenge by updating your zones array and then changing the for loop so that the correct values are added to the list string. */


function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push an array with location and number
    zones.push([location, number]);
    for (var i = 0; i < zones.length; i++) {
      // replace location and number with appropriate code
      list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}

//------------------------------//
//--2.13 FINAL CLOSED VALUES I--//
//------------------------------//

/* Now that the danger zones and obstacles are in order and ready to be dealt with, the Dev Girls need your assistance with directing the Cold Closures Cove sharks to their custom-fitted lasers. That’s right. Lasers.

Sharks are supposed to be directed to the laser-strapping station that matches the index that their name is in within the sharkList array, which looks like this:

["Sea Pain", "Great Wheezy", "DJ Chewie",
 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 "Ice Teeth", "The Notorious J.A.W."]
But they’ve got a problem with their assignLaser function. Something is up, and now there’s a traffic jam at the last shark’s station.

Figure out what happened and apply a fix from this section’s video lecture:

Don’t change the position of the function inside the for loop.
Instead of assigning to the stationAssignment variable, return the anonymous function.
Remove the subsequently unnecessary lines with stationAssignment.
Note: You do not need to call the assignLaser function. */

function assignLaser(shark, sharkList) {
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
     		return function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }
}

//-------------------------------//
//--2.14 FINAL CLOSED VALUES II--//
//-------------------------------//

/* Now the Dev Girls need each shark to be matched with a corresponding target. A shark’s index in the listOfSharks array will match the index of the target that it is supposed to eliminate from listOfTargets.

var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];
Inside the makeTargetAssigner function:

First, return an anonymous function that takes in a shark parameter.
Inside the function that is being returned, create a for loop to loop through the sharks array.
Inside the loop, find out if the current shark from the sharks array matches the shark name that is getting passed as a parameter.
If those values match, build an alert message that produces the following output after calling the getTargetFor function:
Hey, Ice Teeth!
There've been blue witch sightings in our area!
Time to take care of business!
Note: You do not need to edit the provided function call at the bottom. Just build out the makeTargetAssigner function to complete the challenge. */


function makeTargetAssigner(sharks, targets) {
 return function(shark) {
    for (var i = 0; i < sharks.length; i++) {
      if (sharks[i] == shark) {
        alert("Hey, " + shark + "!\n" +
              "There've been " + targets[i] +
              " sightings in our area!\n" +
              "Time to take care of business!");
      }
    }
  };
}

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");


//******************//
//--Hoisting Hills--//
//******************//


//------------------------------//
//--3.2 ANALYZING LOAD ORDER I--//
//------------------------------//

/* Below is a function with multiple functions inside. Using your new knowledge of hoisting, analyze the load order of the thisIsWeird function. Your job is to find out which function gets returned.

If none of the functions get returned, log an "ERROR" string to the console.
If an undefined value gets returned, log an "undefined" string to the console.
If one of the functions gets returned, log a string to the console with the name of the “unused” variable from within the function that is getting returned. e.g., "unused1", "unused2" or "unused3"
function thisIsWeird() {
  function secret() {
    var unused3;
  }
  var result;
  function secret() {
    var unused1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret;
  function secret() {
    var unused2;
  }
  return result;
} */

console.log("unused2");

//-------------------------------//
//--3.3 ANALYZING LOAD ORDER II--//
//-------------------------------//

/* As you progress through The Hoisting Hills, you reach a thin stone bridge where a cluster of Wizard-Devs declare that YOU SHALL NOT PASS.

In order to continue, you must rewrite theBridgeOfHoistingDoom. Reorder the statements as they would be interpreted by a JavaScript interpreter, with the following rules for evaluation:

For all variable declarations, put the corresponding declarations at the top of the function. Assign them a value of undefined and maintain their order.
Now that variable declarations have been placed at the top, remove the original declarations, but leave any associated assignments.
Then, hoist all function declarations to immediately after your variable declarations, maintaining their order as well.
Function declarations that end up being overwritten by other functions with the same name should be removed from their current place in the load order.
Any function declarations that end up replacing other functions, however, will not take the place of the previous version, and instead will just fall into the load order behind existing functions.
Remove any unreachable statements after the first return statement. */

function theBridgeOfHoistingDoom() {
  var ring = undefined;
  var power = undefined;

  function balrog() {
    return "whip";
  }
  function wizard() {
    return "white";
  }

  function elf() {
    return "immortal";
  }

  ring = wizard;
  wizard = balrog;
  return wizard();

}

//--------------------------------//
//--3.4 ANALYZING LOAD ORDER III--//
//--------------------------------//

/* “THAT WAS TOO EASY AND YOU STILL SHALL NOT PASS. MAYBE AFTER THIS ONE.” - The Wizard-Devs of the Hoisting Hills

The Wizard-Devs aren’t used to such Hoisting mastery. They’ve concocted a new, tougher hoisting analysis that you’ll need to prepare before you can cross their bridge. Here are the rules, with some necessary extras:

For all variable declarations, put the corresponding declarations at the top of the function. Assign them a value of undefined and maintain their order.
Now that variable declarations have been placed at the top, remove the original declarations, but leave any associated assignments.
Then, hoist all function declarations to immediately after your variable declarations, maintaining their order as well.
Any function expression assignment is treated here as executable code, and does not change the load order.
Remove any unreachable statements after the first return statement. */

function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;

  function fellowship() {
    return "friends";
  }

  dwarf = function() {
    return "axe";
  };
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  ring();
  return sword;

}

//-------------------------------//
//--3.5 ANALYZING LOAD ORDER IV--//
//-------------------------------//

/* To complete your examination, the Wizard-Devs have asked you to log out the actual result of calling the theBridgeOfHoistingDoom() function. Trace the executable code and log out the appropriate string.

If the result is undefined, log an "undefined" string to the console.
If the function is unable to complete, log an "ERROR" string to the console.
function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship() {
    return "friends";
  }
  sword = "sting";
  dwarf = function() {
    return "axe";
  }
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  }
  ring();
  return sword;
} */

console.log("ERROR");

//********************//
//--Ocean of Objects--//
//********************//

//--------------------------//
//--4.2 BUILDING OBJECTS I--//
//--------------------------//

/*The developers at the Ocean of Objects need help creating data structures for the three different ranger vehicles they use to battle pirates on the Ocean.

Here are the vehicles listed in order of type, passenger capacity, and storedAt location.

Motorboat, 6, Ammunition Depot
Jet Ski, 1, Reef Dock
Submarine, 8, Underwater Outpost
In the order listed, build three object literals with the names vehicle1, vehicle2, and vehicle3.

Within each object literal, create properties for type, capacity, and storedAt, and use the same order provided above. Make sure to store numbers as number values, and text as string values. */

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

//---------------------------//
//--4.3 ACCESSING OBJECTS I--//
//---------------------------//

/* One of the ranger-devs wants to check how many rangers can go to battle the pirates using the Motorboat vehicle.

Using one line of code, access the correct property value (with dot notation), and log the amount of rangers that can join the fun to the console. */

console.log(vehicle1.capacity);

//----------------------------//
//--4.4 ACCESSING OBJECTS II--//
//----------------------------//

/* Excellent, the vehicle data structures are ready!

Now the ranger-devs have asked you to build a findVehicle function that will accept a vehicle name and list of vehicle objects, and return the current storage location of the requested vehicle.

Put all the vehicle objects in a vehicles array. Use the array literal syntax and pass in each of the vehicle variable names.
Build a function expression assigned to a findVehicle variable, which accepts name and list parameters for the name of the individual vehicle sought and the full array of vehicles.
Inside the findVehicle function, use a for loop to loop through all of the vehicles.
if the type of the current object in the list matches the name parameter, then return the current object’s storedAt location.
Call the findVehicle function and pass in the correct arguments to find the storage location of the "Submarine". */

// create vehicles array
var vehicles = [{type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"}, {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"}, {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"}];

// build findVehicle function expression
var findVehicle = function (name, list) {
  for(var i = 0; i < vehicles.length; i++) {
    if(vehicles[i].type === name) {
        return vehicles[i].storedAt;

   }

 }
};

// call findVehicle
findVehicle("Submarine", vehicles);

//---------------------------//
//--4.5 BUILDING OBJECTS II--//
//---------------------------//

/* From the reports of the pirates near Lighthouse Rock, the ranger-devs have determined that the opposition has seriously stepped up their game.

They need to add some important information and power upgrades to their existing vehicles. New properties will be added for weapon (which gets a String) and submersible (which gets a Boolean).

Use dot notation to make the following changes and additions, in order, to the vehicle objects:

The Motorboat will have 4 seats added to its capacity.
The Jet Ski is not submersible.
The Submarine will acquire "Torpedoes".
The Motorboat is not submersible.
The Jet Ski will acquire "Lasers".
The Submarine will add bunk beds, doubling its capacity.
The Motorboat will acquire a "Rear-Mounted Slingshot".
The Submarine is submersible. */

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// add and adjust object properties here
vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

//------------------------------------//
//--4.6 MOAR POWER!! FIGHT PIRATES!!--//
//------------------------------------//

/* The ranger-devs are happy with the modifications to the vehicles. They need one last modification, though, so that they can know what sort of firepower they are able to use on each vehicle.

Add a property called # of weapons to each vehicle using bracket notation. Then, consult the current objects and properties to assign the following values to the correct objects:

There are 8 "Torpedoes".
There are 4 "Lasers".
There is 1 "Rear-Mounted Slingshot". */

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

// add properties and assign values
vehicle3["# of weapons"] = 8;
vehicle2["# of weapons"] = 4;
vehicle1["# of weapons"] = 1;

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨//

//--------------------//
//--4.7 BLINDERS ON!--//
//--------------------//

/* The ranger-devs want to upgrade Lighthouse Rock with new super-blinding light bulbs and remove the old existing bulbs.

The new superBlinders array and lighthouseRock object are provided. Each index of the superBlinders array contains a bulb name and its wattage within a sub-array.

Completely remove the existing bulbs property from the lighthouseRock object.
Add a weaponBulbs property to lighthouseRock and assign the superBlinders array as a value.
Log the name value of the bulb with the highest wattage to the console. Use the correct index from the weaponBulbs property of the lighthouseRock object to access the correct name value.
Note: You do not need to change the provided code for the superBlinders array or the lighthouseRock object. */


var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthouseRock
delete lighthouseRock.bulbs;

// add weaponBulbs property to lighthouseRock
lighthouseRock.weaponBulbs = superBlinders;

// log the correct weaponBulbs array value to the console
console.log(lighthouseRock.weaponBulbs[2][0]);

 //---------------------------------//
 //--4.8 TO THE LIGHTHOUSE, QUICK!--//
 //---------------------------------//

 /* PIRATES AHOY! It’s time for the ranger-devs to get over to the Lighthouse and throw down! Our lighthouseRock object now has a new numRangers property to track how many rangers are fighting at the Lighthouse.

Your goal is to complete the addRanger function that takes in location, name, skillz, and station as parameters. Then we can pass in our lighthouseRock object as the location and start to add rangers.

As rangers are added, increment the number of rangers at the location using its numRangers property.
Add a property to the location using bracket notation that will be used to hold a ranger object. Specifically, each property will be named ranger1, ranger2, ranger3, etc. This will require string concatenation and the current value of the numRangers property.
Now that you have your ranger<number> property, assign an object literal to it that contains properties for name, skillz, and station. Then assign values to those properties using the parameters that we pass in.
Call your addRanger function three times with the appropriate arguments to add the following rangers, in order, to the location:
name: "Nick Walsh", skillz: "magnification burn", station: 2
name: "Drew Barontini", skillz: "uppercut launch", station: 3
name: "Christine Wong", skillz: "bomb defusing", station: 1 */

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
  location.numRangers++;
  // add the ranger<number> property and assign a ranger object
  location["ranger" + location.numRangers] = {name: name, skillz: skillz, station: station};

}

// call addRanger three times to add the new rangers
addRanger(lighthouseRock, "Nick Walsh", "maginifcation burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

//-------------------------------//
//--4.9 MAN YOUR BULB STATIONS!--//
//-------------------------------//

/*  We need to assign each of the ranger-devs to a super-blinding light bulb based on their station number. So we’re building a function that creates an alert message for the ranger-devs in the following format:

Avast, me hearties!
There be Pirates nearby! Stations!
<name>, man the <superblinder>!
<name>, man the <superblinder>!
<name>, man the <superblinder>!
We’ve created a dontPanic function for you that already contains the alert message. Your job is to finish building the list string:

Create a for loop to loop through all of the rangers at the location, using the numRangers property to keep track.
Inside the loop, begin by using the correct property to append the name of the current ranger to the list.
Also, concatenate the text between the ranger name and the superblinder so that it matches the format above.
Lastly, add the name of the correct super-blinding light bulb from the weaponBulbs array to the list. In order to retrieve the name of the correct bulb, you’ll need to use the ranger’s station number.  */

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

 // loop through the rangers and append to list
  for(var i = 1; i <= location.numRangers; i ++){
    var ranger = location["ranger" + i];
    var name = ranger.name;
    var superblinder = location.weaponBulbs[ranger.station - 1][0];

   list += name + ", man the " + superblinder + "!\n";

 }

 alert(list);
}

dontPanic(lighthouseRock);

/****🚨!!WATCH VIDEO 4.10!!🚨****/

//----------------------------------//
//--4.11 FUNCTIONS AS PROPERTIES I--//
//----------------------------------//

/* To improve organization and memory efficiency, the ranger-devs have asked you to make all functions that add objects to objects part of the destination location instead of being present in the global scope.

Take the addRanger function from below and add it directly within the lighthouseRock object. The property name should still be addRanger.
Refactor the addRanger method to use this instead of location.
function addRanger(location, name, skillz, station) {
  location.numRangers++;
  location["ranger" + location.numRangers] = {
    name: name,
    skillz: skillz,
    station: station
  };
} */

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function ( name, skillz, station){
    this[numRangers]++;
    this[name]["ranger" + this.numRangers] = {name: name, skillz: skillz, station: station};
  }

};

//--------------------------------------//
//--4.12 CALLING FUNCTION PROPERTIES I--//
//--------------------------------------//

/* The pirates are really rough today! Add a new ranger to the lighthouseRock object by calling your addRanger method with the following information:

name: "Jordan Wade"
skillz: "dual-wield hand crossbow"
station: 4 */

/* var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function (name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// call the addRanger method on lighthouseRock
 */
 lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);

 //-----------------------------------//
 //--4.13 FUNCTIONS AS PROPERTIES II--//
 //-----------------------------------//

/* It looks like ranger4 has a station assignment at Lighthouse Rock, but now there aren’t enough super-blinding bulbs for everyone.

The ranger-devs want you to build a new function property for lighthouseRock that adds a new super-blinding bulb to the weaponBulbs array, complete with a name and insane wattage.

Create a new addBulb function property for the lighthouseRock object, but don’t add it directly inside the object. Instead, add it on the outside of the lighthouseRock object.
Pass in name and wattage as parameters.
Push any new bulb to the weaponBulbs array. Notice how the data is arranged and indexed in the superBlinders array. That means we’re going to need to push a sub-array with the name and wattage.
Code School
 */



 var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

 var lighthouseRock = {
   gateClosed: true,
   weaponBulbs: superBlinders,
   capacity: 30,
   secretPassageTo: "Underwater Outpost",
   numRangers: 3,
   ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
   ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
   ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
   ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
   addRanger: function(name, skillz, station) {
     this.numRangers++;
     this["ranger" + this.numRangers] = {
       name: name,
       skillz: skillz,
       station: station
     };
   }
 };

 // create addBulb function property here
 lighthouseRock.addBulb = function(name, wattage){
 	this.weaponBulbs.push([name, wattage]);
 };


 //---------------------------------------//
 //--4.14 CALLING FUNCTION PROPERTIES II--//
 //---------------------------------------//

/* A new shipment of super-blinding bulbs just came in!

Use the addBulb function to add these three new bulbs to the list of super-blinders available at Lighthouse Rock.

name: "Blasterbright"
wattage: 5000

name: "Sight Slayer"
wattage: 1800

name: "Burner of Souls"
wattage: 7500 */

lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};

// call addBulb and pass in the correct arguments
lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);


/****🚨!!WATCH VIDEO 4.16!!🚨****/


 //----------------------//
 //--4.17 ENUMERATION I--//
 //----------------------//

/* The devs at Lighthouse Rock have received a shipment of spearguns for use in the battle against the pirates, and they need to know which spearguns have arrived.

Build a function called listGuns that accepts a guns object as a parameter.
Inside that function, use a for in loop to loop through each speargun in the guns object.
Log each speargun in to the console.
After your function is built, call listGuns and pass in the rockSpearguns object. */

var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// build listGuns
var listGuns = function(guns) {
  for(var speargun in guns){
  	console.log(speargun);
  }
};
// call listGuns and pass in rockSpearguns
listGuns(rockSpearguns);


//-----------------------//
//--4.18 ENUMERATION II--//
//-----------------------//

/* We’ve got our list of spearguns, but the problem is that the ranger-devs need to know what heft property each speargun has in order to know which one is right for their individual aiming styles.

Modify the log message in your listGuns function so that it follows the format below. You’ll need to use bracket notation strategically to access the heft property for the current speargun in guns.

Behold! <speargun name>, with <heft style> heft!
Note: You only need to change the console message for this challenge, and you do not need to change any of the other provided code. */

/* var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns(guns) {
  for (var speargun in guns) {
    // modify the log message here
    console.log(speargun);
  }
}

listGuns(rockSpearguns);
 */


 var rockSpearguns = {
   Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
   Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
   Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
   Firefork: {barbs: 6, weight: 8, heft: "overhand"},
   "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
 };


 function listGuns(guns) {
   for (var speargun in guns) {
     // modify the log message here
     console.log("Behold! " + speargun + ", with " + guns[speargun].heft + " heft!");
   }
 }

 listGuns(rockSpearguns);

 //------------------------//
 //--4.19 ENUMERATION III--//
 //------------------------//

/* The ranger-devs liked your listGuns function so much that they want it added to the rockSpearguns object.

Rather than moving it directly inside the object, use bracket notation to convert the function into a "listGuns" property on the rockSpearguns object.
Since the rockSpearguns object will now contain more than just spearguns, change all instances of your enumeration reference word to property instead of speargun.
And since we’re working from within the function now, we no longer need to pass in guns as a parameter. Remove it so that we’re not passing any parameters, and then replace any other instance of guns with this.
In order to ensure that only spearguns get printed in the console message, add a conditional inside the for loop to make sure that the message only gets logged if this[property]["heft"] does not equal an undefined value.
Lastly, change the function call at the bottom to use bracket notation along with parentheses to call the function on the rockSpearguns object.
Note: Use bracket notation throughout this challenge. No dot notation allowed! */


/* var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// convert listGuns function
function listGuns(guns) {
  for (var speargun in guns) {
    console.log("Behold! " + speargun + ", with " +
                guns[speargun]["heft"] + " heft!");
  }
}

// call listGuns using bracket notation on rockSpearguns
listGuns(rockSpearguns); */

var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// convert listGuns function
rockSpearguns["listGuns"] = function () {
  for (var property in this) {
     if (this[property]["heft"] !== undefined) {
      console.log("Behold! " + property + ", with " + this[property]["heft"] + " heft!");
    }
  }
};

// call listGuns using bracket notation on rockSpearguns
rockSpearguns["listGuns"]();

//************************//
//--Plains of Prototypes--//
//************************//

//--------------------//
//--5.2 PROTOTYPES I--//
//--------------------//

/* The cowboy-devs at the Plains of Prototypes need your help! They have multiple lists of cattle being imported from different regions. Each individual bovine is represented as an object, and those objects are contained within an array. Here’s an example:

var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];
The only problem is that the cowboy-devs don’t have time to go through all of the lists and count each specific type of cattle that’s being imported. Instead, they want to create a countCattle prototype function that returns the total number of cattle:

Add a function called countCattle to the Array prototype. This will allow the cowboy-devs to call the function on any array list (like the canyonCows array).
The function should take in a kind parameter.
Inside the function, set up a numKind variable to keep track of how many bulls, cows, or calves are present in the array.
Use a for loop to loop through all of the array values. You can use this to refer to the current list.
If the type property of the current array value matches the kind parameter, then increment your numKind variable.
After your loop, return the numKind variable for the total number of cattle.
Note: You do not need to call the countCattle function. We’ll call it when testing your code. You also do not need to include the canyonCows array in your code submission. */

Array.prototype.countCattle = function (kind){
	var numKind;
  for(var i = 0; i < this.length; i++){
    if(this[i].type == kind){
    	numKind++;
    }
  }
	return numKind;
};


//---------------------//
//--5.3 PROTOTYPES II--//
//---------------------//

/* The cowboy-devs have determined that they need to put the calves from the Canyon, the bulls from the Valley, and the cows from the Forest together in one pasture on the Plains.

Using the countCattle function that you added to the Array prototype, build one line of code to alert the sum of:

The number of canyonCows with a "calf" type.
The number of valleyCows with a "bull" type.
The number of forestCows with a "cow" type.
The lists are provided here for your reference: */

var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];
var valleyCows = [
  {name: "Danielle", type: "cow", hadCalf: null},
  {name: "Brittany", type: "cow", hadCalf: "Christina"},
  {name: "Jordan", type: "bull", hadCalf: null},
  {name: "Trevor", type: "bull", hadCalf: null},
  {name: "Christina", type: "calf", hadCalf: null},
  {name: "Lucas", type: "bull", hadCalf: null}
];
var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }
  return numKind;
};


alert( canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));


//----------------------//
//--5.4 PROTOTYPES III--//
//----------------------//


/* To let mother cows rest, the cowboy-devs at the Plains of Prototypes have decided only to breed cows that have not given birth to any calves yet.

Now they want to add some functionality to the Object prototype itself. They’ve asked you to build two functions, in order:

First, build a function called noCalvesYet, which will be added to the Object prototype.
If the object type is a "cow" and also had no calves, the function should return a true value. Otherwise it should return a false value.
Then, build a function called countForBreeding, which will be added to the Array prototype.
In countForBreeding start by creating a numToBreed counter variable. The following steps refer to code in countForBreeding.
Use a for loop to loop through all of the array values. You can use this to refer to the current list.
Call noCalvesYet(). If it returns true for the current array value, then that means the cows are not moms, and we can increment the numToBreed counter variable.
After your loop, this function should return the numToBreed count, which represents how many non-mother cows are available within any array.
Here is a list of cattle for your reference: */

var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

Object.prototype.noCalvesYet = function () {
  if(this.type == "cow" && this.hadCalf === null){
    return true;
  }
  else{
  	return false;
  }
};

Array.prototype.countForBreeding = function (){
  var numToBreed = 0;
  for(var i = 0; i < this.length; i++){
    if(this[i].noCalvesYet()){
    	numToBreed += 1;
    }
  }
	return numToBreed;
};
