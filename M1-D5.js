/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
    return l1 * l2
}

let rectangleArea = area(5,10)
console.log(rectangleArea)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(x, y) {
    if (x === y){
        return (x + y) * 3
    } else {
        return x + y
    }
    
}

let crazyCrazy = crazySum(4, 3)
console.log(crazyCrazy)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(a) {
if (a > 19){
        return (a - 19) * 3
    } else {
        return a - 19
    }
}
let diff = crazyDiff(9)
console.log(diff)


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400){
        return true
    } else {
        return false
    }
}

let between = boundary(135)
console.log(between)

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(text) {
    if (text === "Strive") {
    console.log(text) 
} else {
    console.log(text + "" + "Strive")
}
}

strivify("Strive")

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(n) {
    if (n > 0 && n % 3 === 0 ){
        console.log(n, " is a mutliple of 3")
    } else if (n > 0 && n % 7 === 0 ) {
        console.log(n, " is a mutliple of 7")
    } else {
        console.log("Try again!")
    }
}

let check = check3and7(-14)
console.log(check)



/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(text){
let newString = "";
    for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
    return newString;
}

let nowString = reverseString("Ahmed")
console.log(nowString)

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
function upperFirst(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  
  return str.join(' '); 
}

upperFirst("Im a bad ass programmer");

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/