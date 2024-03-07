// FROM EXERCISE 36

function makeShirt(size: string = "Large" , text: string = "I love Typescript."): void{
    console.log(`\nYou ordered a ${size} shirt that says ${text}`)
};

makeShirt('');
makeShirt('Medium');

//different message
makeShirt("Small","Just coding...");
