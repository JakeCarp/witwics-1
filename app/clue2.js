// Having deciphered the message and knowing what she is planning to steal we need to figure who is helping her


// Criminals all have a wanted number and she will most likely work with the one with the highest wanted level
// Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
  return (num1 > num2) ? num1 : num2
}


// We also need to know how successful the criminals have been by grading their number of successes
// Given two numbers, amount successful and total heists, return the corresponding letter grade on percentage that were successful.
// 90 to 100 = "A", 80 to 89 = "B", 70 to 79 = "C", 60 to 69 = "D", 59 and under = "F"
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function crimeGrader(successful, total) {
  let grade = successful / total * 100
  if (grade <= 59) {
    return "F"
  } else if (grade <= 69) {
    return "D"
  } else if (grade <= 79) {
    return "C"
  } else if (grade <= 89) {
    return "B"
  } else {
    return "A"
  }

}


// To help us better catch the associate we need to know when they are most active.
// Given an integer that represents an hour in the day (1 - 24), write a function that returns "morning", "afternoon", "evening", or "night" based off of what hour it is. You'll need to think in military time.
//   morning is between 5am and 11am (5 - 11)
//   afternoon is between 12pm and 5pm (12 - 17)
//   evening is between 6pm and 9pm (18 - 21)
//   night is between 10pm and 4am (22 -24 and 1 - 4)
//   Make sure your ranges are inclusive
function timeOfDay(hour) {
  switch (hour) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
      return "night"
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return "morning"
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return "afternoon"
      break;
    case 18:
    case 19:
    case 20:
    case 21:
      return "evening"
  }
}

// Our surveillance team finds the closer we get to catching the associate the hotter the person gets, we can use this to narrow down the person

// Write a function that will take in a number and return 'suspicious' if it indicates the person is over 98.6° and if the person is at or above 103° 'very suspicious', if it is under return 'not suspicious', (hint: try this with string concatenation)
function isSuspicious(temp) {
  let out = 'suspicious'
  if (temp <= 98.6) {
    return 'not'.concat(' ', out)
  } else if (temp < 103) {
    return out
  }
  return 'very'.concat(' ', out)
}

// We think we might have found the associate, and have added a tracker to their car, to find where the associate is hiding we need to know when their car is stopped

//Write a function that takes in a car object, if it is not moving then return true

// example of car object passed in
let exampleCar = {
  make: "Ford",
  model: "Mustang",
  color: "Red",
  moving: false
}

function isStopped(car) {
  return (car.moving == false) ? true : false
}

// We have found everything we need to capture the associate, to make sure they don't elude us we want to make sure we only capture them when they are at home and their asleep.

// Write a function that returns true if associate is at home and asleep, or false if either one of the statements is false

// example of suspect object passed in
let suspect = {
  atHome: true,
  asleep: true
}

function attemptCapture(suspect) {
  return (suspect.atHome && suspect.asleep ? true : false)
}