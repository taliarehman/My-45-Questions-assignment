//  EXERCISE 30.
var users = ["Admin", "Eric", "Tom", "Bell", "Ken"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log("\nHello Admin, would you like to see a status report?");
    }
    else {
        console.log("\nHello ".concat(user, ", thankyou for logging again."));
    }
    ;
}
;
// EXERCISE 32
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
users = [];
if (users.length === 0) {
    console.log("\n\nwe need to find some users!");
}
;
// EXERCISE 32
var current_users = ["Admin", "Eric", "Jhon", "Jack", "Lily"];
var new_users = ["Admin", "Eric", "Tom", "Bell", "Ken"];
var current_user_in_lowercase = current_users.map(function (user) { return user.toLowerCase(); });
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    if (current_user_in_lowercase.includes(new_user.toLowerCase())) {
        console.log("\n\nSorry ".concat(new_user, ", this name is already taken"));
    }
    else {
        console.log("\nYes ".concat(new_user, ", is available"));
    }
}
