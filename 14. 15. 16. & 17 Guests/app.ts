// EXERCISE # 14 : GUEST LIST
let guestList: string []= ['Haris uncle','Bina aunty','faris','sana'];
for(let i=0; i<guestList.length; i++){
    console.log('Assalam o alaikum ' + guestList[i] + ',\nyou are invited to dinner tommorow.\nThankyou\n');
}

// EXERCISE # 15 : CHANGING GUEST LIST
let personNotComing: string ="Sana";
let newGuest: string ="Hamna";
guestList[3] =newGuest;
for(let i=0; i<guestList.length; i++){
    console.log('Assalam o alaikum ' + guestList[i] + ',\nyou are invited to dinner tommorow.\nThankyou\n');
}
console.log(`${personNotComing} will not be coming tommorow for dinner.\n `);

// EXERCISE # 16 : MORE GUESTS
guestList.unshift('Samina','Uncle Omer','Laiba');
for(let i=0; i<guestList.length; i++){
    console.log('Assalam o alaikum ' + guestList[i] + ',\nyou are invited to dinner. Thankfully, we have found a bigger dinner table.\nThankyou\n');
};

// EXERCISE # 17 : SHRINKING GUEST LIST 
console.log('\nUnfortunately, we will not be able to arrange a bigger dinner table in time, and there is space for two people only.\n');
while(guestList.length>2){
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest} we are unable to invite you.\n`)
}
for(let i=0; i<guestList.length; i++){
    console.log('Assalam o alaikum ' + guestList[i] + ',\nyou are still invited. \nThankyou\n');
};
guestList.splice(0,2);
console.log(guestList);

