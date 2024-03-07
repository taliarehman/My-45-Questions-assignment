// Lower case
let personName :string ="Talia"
console.log("Lowercase:" , personName.toLowerCase());

// Upper case
console.log("Uppercase:" , personName.toUpperCase());

//  Title case
console.log("Titlecase:" , personName.replace(/\bw/g,c => c.toUpperCase()));
