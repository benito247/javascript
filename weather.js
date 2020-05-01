// weather report

let place = "Manc";
let weather = "Cloudy"; 

if (place == "Manc" && weather == "Sunny") {
    console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
    console.log("Obviously");
}
else {
    console.log("What it isn't raining?");
}

let day = "Monday";
let day1 = "Sunday";

if (day == "Monday" || day1 == "Sunday") {
    console.log("It's weekend");
}
else {
    console.log("When's weekend?");
}

let country = "UK"; 
let age = "17"; 

if (country == "UK" && age > "17") {
    console.log("Check again");
}

let day2 = "Saturday";

if (day2 == "Saturday"|| day2 == "Sunday") {
    console.log("It's weekend!");
}
else {
    console.log("When's weekend");
}
let day3 = "Saturday";

if (day3 == "Saturday"|| day3 == "Sunday") {
    console.log("It's weekend!");
}
else {
    console.log("When's weekend");
}
// expressions to be evaulated

if ("Saturday" || "Monday") { // true vs false
    console.log("Saturday");  // true
}
else {
    console.log("Monday");    // false
}

