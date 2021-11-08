// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We created a variable called name and assign the value as Dane.
// We check if name is true, exact match as Dane, but it not true.
// We console.log 'Hi, Mary!'. To be executed if a condition is true.
// We console.log ' How do you do?' will be run since the condition is false.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We created a variable called secret.
// We created a variable called code and assigned 123 as a number.
// We check if code is exact match of number 123.
// We created secret equal string super.
// We multipled number 123 by 2 and double 246.
// We check if code is greater than 250 hence, it is false so console.log secret.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We created a variable called isStudent and set it to be true i.e. boolean.
// We created variable called age, set a number to be 34.
// We created a variable called zip, set a number to be 55407.
// We check if isStudent is exactly true and greater than 80000.
// the condition is false and console.log('You're a student on the West Coast) will not run.
// we check if else isStudent is exctly false or age less than 30, hence the conditon is false.
// the condition console.log('What are your honnies?') will not run.
// we check if else isStudent student is exactly true and since the condition is true.
// the condition console.log ('Welcome to Prime!') will run.
// else console.log('How about the weather?')

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - Instructions are colorOne is set to blue and colorTwo is set to red
// Hence, it should be let colorOne = 'blue'; let colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// From instruction we are to set the color as;
colorOne = 'purple'
colorTwo = 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - || means OR but the instruction states &&
// Should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - <= less than or equal to but the instruction is greater than or equal to.
// Hence, it should be if(age >= minAge)
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
