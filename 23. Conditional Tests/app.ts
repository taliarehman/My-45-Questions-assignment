let car = 'subaru';

// Test #1 EQUALITY COMPARISON (TRUE)
console.log("\nIs car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// true

// Test #2 STRICT EQUALITY COMPARISON (TRUE)
console.log("\nIs car === 'subaru'? I predict True");
console.log(car === 'subaru');
// true

// Test #3 INEQUALITY COMPARISON (FALSE)
console.log("\nIs car != 'subaru'? I predict false.");
console.log(car != 'subaru');
// false

// Test #4 STRICT INEQUALITY COMPARISON (FALSE)
console.log("\nIs car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
// false

// Test #5 LESS THAN COMPARISON (FALSE)
console.log("\nIs car < 'subaru'? I predict false.");
console.log(car < 'subaru');
// false (lexicographic comparison)

// Test #6 GREATER THAN COMPARISON (FALSE)
console.log("\nIs car > 'subaru'? I predict false.");
console.log(car > 'subaru');
// false (lexicographic comparison)

// Test #7 LESS THAN OR EQUAL COMPARISON (TRUE)
console.log("\nIs car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');
// true

// Test #8 GREATER THAN OR EQUAL COMPARISON (TRUE)
console.log("\nIs car >= 'subaru'? I predict True.");
console.log(car >= 'subaru');
// true

// Test #9 CHECKING TRUTHINESS (TRUE)
console.log("\nIs car? 'subaru'? I predict True.");
console.log(car);
// true (non-empty string is true)

// Test #10 CHECKING FALSINESS (FALSE)
console.log("\nIs !car? 'subaru'? I predict false.");
console.log(!car);
// true 