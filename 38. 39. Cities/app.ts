// EXERCISE 38

{function describe_city(city: string, country: string = "Pakistan"): void{
    console.log(`${city} is in ${country}`)
};

describe_city("Karachi"); //default
describe_city("Mumbai","India");
describe_city('Islamabad',"PAKISTAN");
};


// EXERCISE 39

function describeCity(city: string, country: string): string {
    return `${city},${country}`
};

let country1 =describeCity("Lahore","Pakistan");
let country2 =describeCity("Tokyo","Japan");
let country3 =describeCity("Seoul","South Korea");

console.log(`\n`,country1);
console.log(country2);
console.log(country3);