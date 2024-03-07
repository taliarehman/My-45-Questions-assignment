function sandwich(...items: string[]): void{
    console.log("\nYOUR ORDER:\n");

    for (let i = 0; i< items.length; i++)
    console.log(`- ${items[i]}`);
}

console.log("\nenjoy your sandwich");

sandwich('Veggie','Chicken','Grilled cheese');
sandwich('Beef','Seafood');
sandwich('Garlic chicken','BBQ chicken');