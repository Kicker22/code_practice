// This is a program to practice conditionals
let raceNumber = Math.floor(Math.random() * 1000);

let earlyAdults = 0;

// early reg var
let regEarly = false;

// runnerAge
let runnerAge = 18;

if (runnerAge > 18 && regEarly === true) {
  let earlyNumber = raceNumber + 1000;
  console.log("Thanks for your early registration!");
  console.log(
    `Your start time is 9:30am.\nYour runner number is: ${earlyNumber}.`
  );
} else if (runnerAge > 18 && regEarly === false) {
  console.log(
    `Thank you for registering\nYour start time is 11:30am\nYour runner number is ${raceNumber}`
  );
} else if (runnerAge < 18) {
  console.log(
    `Thank you for registering\nYour start time is 12:30pm\nyour runner number is ${raceNumber}.`
  );
} else {
  console.log("Please see the registration desk!");
}
