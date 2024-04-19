// Tests for equality and inequality with strings

console.log("Tests for equality and inequality with strings")

let favColor : string= "Black"
console.log(favColor === "Blue") //False
console.log(favColor !== "Blue") //True


// Tests using the lower case function

console.log("Tests using the lower case function")
let message : string = "NICE TO MEET YOU!"
console.log(message.toLowerCase() !== "nice to meet you!") //False


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to")
let number1 : number = 23
let number2 : number = 87
console.log(number1 === number2) //False
console.log(number2 !== number1) //True
console.log(number2 > number1) //True
console.log(number1 < 15) //False
console.log(number2 >= number1)//True
console.log(number1<= number2)//True


// Tests using "and" and "or" operators

console.log("Tests using and and or operators")
console.log(number1 === 87 && favColor === "black")//False
console.log(message === "NICE TO MEET YOU!" || number2=== 87)//True



// Test whether an item is in an array
console.log("Test whether an item is in an array");
let subjects = ['English', 'Maths', 'Biology', 'Chemistry', 'Physics'];
let subject = "Maths";
console.log(subjects.includes(subject)); // Output: true

// Test whether an item is not in an array
console.log("Test whether an item is not in an array");
let colors = ['Black', 'White', 'Blue'];
let availColor = "Yellow";
console.log(!colors.includes(availColor)); // Output: true
