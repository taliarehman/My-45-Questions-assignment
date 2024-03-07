function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nYOUR ORDER:\n");
    for (var i = 0; i < items.length; i++)
        console.log("- ".concat(items[i]));
}
console.log("\nenjoy your sandwich");
sandwich('Veggie', 'Chicken', 'Grilled cheese');
sandwich('Beef', 'Seafood');
sandwich('Garlic chicken', 'BBQ chicken');
