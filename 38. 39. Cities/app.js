// EXERCISE 38
{
    function describe_city(city, country) {
        if (country === void 0) { country = "Pakistan"; }
        console.log("".concat(city, " is in ").concat(country));
    }
    ;
    describe_city("Karachi"); //default
    describe_city("Mumbai", "India");
    describe_city('Islamabad', "PAKISTAN");
}
;
// EXERCISE 39
function describeCity(city, country) {
    return "".concat(city, ",").concat(country);
}
;
var country1 = describeCity("Lahore", "Pakistan");
var country2 = describeCity("Tokyo", "Japan");
var country3 = describeCity("Seoul", "South Korea");
console.log("\n", country1);
console.log(country2);
console.log(country3);
