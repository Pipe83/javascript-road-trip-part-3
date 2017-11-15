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
