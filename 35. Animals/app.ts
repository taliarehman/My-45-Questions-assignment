let animals: string [] = ["Cat","Rabbit","Deer","Koala bear"];

for (let animal of animals){
    console.log(animal)
};
console.log("\n");


for (let animal of animals){
    console.log(`\nA ${animal} would make a great pet.`);
};

for (let animal of animals){
console.log(`\nA ${animal} have a tail`);
};


// or
{  console.log (`\n`+ animals +` hava a tail in common.\n`);
};
