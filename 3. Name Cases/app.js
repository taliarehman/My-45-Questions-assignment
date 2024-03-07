// Lower case
var personName = "Talia";
console.log("Lowercase:", personName.toLowerCase());
// Upper case
console.log("Uppercase:", personName.toUpperCase());
//  Title case
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
