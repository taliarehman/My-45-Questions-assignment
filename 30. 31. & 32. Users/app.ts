//  EXERCISE 30.

let users: string[] =["Admin","Eric","Tom","Bell","Ken"];

for (let user of users) {
    if (user === "Admin") {
    console.log("\nHello Admin, would you like to see a status report?")
} else {
    console.log(`\nHello ${user}, thankyou for logging again.`);
};
};


// EXERCISE 31

// if (users.length === 0) {
//     console.log("We need to find more users!")
// } else {
//     for(let user of users){
//         if (user === "Admin"){
//             console.log("Hello Admin, would you like to see a status report?")
//         } else {
//             console.log(`Hello ${user}, thankyou for logging again.`)
//         }
 //   }
//}
users = []
if (users.length ===0) {
    console.log("\n\nwe need to find some users!")
};

// EXERCISE 32

let current_users: string [] =["Admin","Eric","Jhon","Jack","Lily"];
let new_users: string [] =["Admin","Eric","Tom","Bell","Ken"];
let current_user_in_lowercase: string[] =current_users.map(user => user.toLowerCase());

for(let new_user of new_users) {
    if (current_user_in_lowercase.includes(new_user.toLowerCase())) {
        console.log(`\n\nSorry ${new_user}, this name is already taken`)
    } else {
        console.log(`\nYes ${new_user}, is available`)
    };

};