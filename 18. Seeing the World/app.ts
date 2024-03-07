// #1
let places: string [] =['Istanbul','Mecca','Morocco','Tokyo','Jiuzhaigou Valley','Neelum Valley','Medina'];

// #2 
console.log('\n\nORIGINAL: ' + places);

// #3
console.log('\n\nALPHABETICAL ORDER OF ORIGINAL: ' + [...places].sort());

// #4
console.log('\n\nORIGINAL: ' + places);

// #5
console.log('\n\nREVERSE ALPHABETICAL: ' + [...places].sort().reverse());

// #6
console.log('\n\nITS ORIGINAL: ' + [...places].sort().reverse().reverse());

// #7
console.log('\n\nREVERSE: ' + places.sort());

// #8
console.log('\n\nREVERSE AGAIN: ' + places.sort().reverse());

// #9
console.log('\n\nALPHABETICAL ORDER: ' + places.sort().reverse().reverse());

// #10
console.log('\n\nREVERSE ALPHABETICAL ORDER: '+ places.sort().reverse());