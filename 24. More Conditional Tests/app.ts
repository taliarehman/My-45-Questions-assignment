let yourName: string ='Talia';
let age: number =18
let numbers: number[] =[1, 2, 3, 4];

// #1 Tests for equality and inequality with strings

// equality with string:
console.log("\nIs your name 'Talia'?");
console.log(yourName == 'Talia');
// answer will be true 

// inequality with string:
console.log("\nIs your name 'Alia'?");
console.log(yourName != 'Talia');
// answer will be false 

// strict equality with string:
console.log("\nIs 'Talia' your name?");
console.log(yourName === 'Talia');
// answer will be true

// strict inequality with string:
console.log("\nIs your name Faizah'?");
console.log(yourName !== 'Talia');
// answer will be false


// #2 Tests using the lower case function

// lower case function on equality:
console.log("\n\nIs your first name 'Alia'?");
console.log(yourName == yourName.toLowerCase());

// lower case function on inequality:
console.log("\nIs your first name 'Talia'?");
console.log(yourName != yourName.toLowerCase());

// lower case function on strict equality:
console.log("\nIs your first name really 'Faizah'?");
console.log(yourName === yourName.toLocaleLowerCase());

// lower case function on strict inequality:
console.log("\nIs your first name really 'Talia'?");
console.log(yourName !== yourName.toLowerCase());

// #3 Numerical tests

// Equality:
console.log('\nIs your age = 18?');
console.log(age == 18);
// answer will be true

// inequality:
console.log('\nIs your age = 16?');
console.log(age != 18);
// answer will be false

// Greater than:
console.log('\nIs your age greater than 16?');
console.log(age > 16);
// answer will be true

// Less than:
console.log('\nIs your age less than 16?');
console.log(age < 16);
// answer will be false


// Greater than equal to:
console.log('\n\nAre you greater than 16 years old?');
console.log(age >= 16);
// answer will be true


// Less than equal to:
console.log('\nAre you less than 15 years old?');
console.log(age <= 15);
// answer will be false

// #4 "And" & "Or" operators also called "logical And" & "Logical Or"

// Logical And:
console.log('\n\nIs your age greater than 16 & less than 20 ?');
console.log(age > 16 && age < 20);
// answer will be true

// Logical Or:
console.log('\nIs your age greater than 19 & less than 24 ?');
console.log(age > 20 || age < 16);
// answer will be false

// #5 Is it an Array? :
console.log('\n\nIs 3 in numbers?');
console.log(3 in numbers);
// answer will be true

// #6 Is it not an Array? :
console.log('\n\nIs 5 in numbers?');
console.log(5 in numbers);
// answer will be true

