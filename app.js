/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if(age > 18){
        return 'Adult'
    }else{
        return 'Minor'
    }
}
console.log('Exercise 2 Result:', isAdult(21));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (vowel) => {
    if(vowel ==='a'|| vowel === 'e' || vowel === 'i' || vowel === 'o' || isCharAVowel === 'u'){
        return true;
    }else{
        return false;
    }
}
console.log('Exercise 3 Result:', isCharAVowel('a'));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => `${name}, ${domain}`;


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, timeOfDay) =>{
    if(timeOfDay === 'morning'){
        return `Good ${timeOfDay}, ${name}`;
    }else if(timeOfDay === 'afternoon'){
        return `Good ${timeOfDay}, ${name}`;
    }else if(timeOfDay === 'evening'){
        return `Good ${timeOfDay}, ${name}`;
    }else{
        return 'What time of day is it?';
    }
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));



/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (x,y,z) =>{
    if(x > y && x > z){
        return x;
    }else if(y > x && y > z){
        return y;
    }else if(z > x && z > y){
        return z;
    }else{
        return 'possible two max numbers'
    }
    
}

console.log('Exercise 6 Result:', maxOfThree(17, 4, 9));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/


const calculateTip = (amount, percentage) => amount * (percentage/100)

console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temp, scale) =>{
    if(scale === 'C'){
        return (temp * 1.8) + 32;
    }else{
        return (temp - 32)/2;
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "F"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) =>{
    if(operation === 'add'){
        return num1 + num2;
    }else if(operation === 'subtract'){
        return num1 - num2;
    }else if(operation === 'multiply'){
        return num1 * num2;
    }else{
        return num1 / num2;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) =>{
    if(score >= 90){
        return 'A';
    }else if(score <=89 && score >= 80){
        return 'B';
    }else if(score <=79 && score >= 70){
        return 'C';
    }else if(score <=69 && score >= 60){
        return 'D';
    }else{
        return 'F';
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (firstName, lastName) =>{
    let fName = firstName.slice(0,3);
    let lName = lastName.slice(0, 3);
    let length = firstName.length + lastName.length;
    return `${fName}${lName}${length}`;
}

console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/


// using arguments 
function numArgs(){
    let count = 0;
    for(i = 0; i < arguments.length; i++){
        count = count + 1;
        
    }
console.log(arguments)
return count;
}

// using (...args)
const numArgs = (...args) => args.length;


console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
