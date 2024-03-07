// FROM EXERCISE 36
function makeShirt(size, text) {
    if (text === void 0) { text = "I love Typescript."; }
    console.log("\nYou ordered a ".concat(size, " shirt that says ").concat(text));
}
;
makeShirt('');
makeShirt('Medium');
//different message
makeShirt("Small", "Just coding...");
