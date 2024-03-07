interface item {
    itemName: string
    price: number
};

const book ={
itemName: "JANNAH: HOME AT LAST by Sheikh Omer Suleiman.",
    price: 3000
};

const pen ={
    itemName: "Dollar Pointer",
    price: 30
};

console.log(`\nBook Name: ${book.itemName},\n Price: Rs ${book.price}`);
console.log(`Pen Name: ${pen.itemName},\n Price: Rs ${pen.price}`);
