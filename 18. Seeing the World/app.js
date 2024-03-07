var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// #1
var places = ['Istanbul', 'Mecca', 'Morocco', 'Tokyo', 'Jiuzhaigou Valley', 'Neelum Valley', 'Medina'];
// #2 
console.log('\n\nORIGINAL: ' + places);
// #3
console.log('\n\nALPHABETICAL ORDER OF ORIGINAL: ' + __spreadArray([], places, true).sort());
// #4
console.log('\n\nORIGINAL: ' + places);
// #5
console.log('\n\nREVERSE ALPHABETICAL: ' + __spreadArray([], places, true).sort().reverse());
// #6
console.log('\n\nITS ORIGINAL: ' + __spreadArray([], places, true).sort().reverse().reverse());
// #7
console.log('\n\nREVERSE: ' + places.sort());
// #8
console.log('\n\nREVERSE AGAIN: ' + places.sort().reverse());
// #9
console.log('\n\nALPHABETICAL ORDER: ' + places.sort().reverse().reverse());
// #10
console.log('\n\nREVERSE ALPHABETICAL ORDER: ' + places.sort().reverse());
