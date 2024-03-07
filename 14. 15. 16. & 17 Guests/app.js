// EXERCISE # 14 : GUEST LIST
var guestList = ['Haris uncle', 'Bina aunty', 'faris', 'sana'];
for (var i = 0; i < guestList.length; i++) {
    console.log('Assalam o alaikum ' + guestList[i] + ',\nyou are invited to dinner tommorow.\nThankyou\n');
}
// EXERCISE # 15 : CHANGING GUEST LIST
var personNotComing = "Sana";
var newGuest = "Hamna";
guestList[3] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Assalam o alaikum ' + guestList[i] + ',\nyou are invited to dinner tommorow.\nThankyou\n');
}
console.log("".concat(personNotComing, " will not be coming tommorow for dinner.\n "));
// EXERCISE # 16 : MORE GUESTS
guestList.unshift('Samina', 'Uncle Omer', 'Laiba');
for (var i = 0; i < guestList.length; i++) {
    console.log('Assalam o alaikum ' + guestList[i] + ',\nyou are invited to dinner. Thankfully, we have found a bigger dinner table.\nThankyou\n');
}
;
// EXERCISE # 17 : SHRINKING GUEST LIST 
console.log('\nUnfortunately, we will not be able to arrange a bigger dinner table in time, and there is space for two people only.\n');
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, " we are unable to invite you.\n"));
}
for (var i = 0; i < guestList.length; i++) {
    console.log('Assalam o alaikum ' + guestList[i] + ',\nyou are still invited. \nThankyou\n');
}
;
guestList.splice(0, 2);
console.log(guestList);
