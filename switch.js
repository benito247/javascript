let car ="Jaguar";  // preferance change working!

if(car == "Ford" || car == "GM"){
    console.log("you've got an American car!");
}
else if(car == "Peugeot" || car == "Citeron"){
    console.log("You've got a French boy!");
}
else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
    console.log("Japanese cars are dead quiet!");
}
else if(car == "Mercedes"){
    console.log("You are proper posh German!");
}
else if(car == "Volkswagen"){
    console.log("South Korean cars are getting popular!");
}
else{
    console.log("Your car is not in the top ten companies in the world!");
}

switch (car) {
    case "Ford":
    case "GM":
        console.log("you have a american car") ;
        break;
    case "Peugeot":
    case "Citeron":
        console.log("you have a french car");
        break;
    case "Honda":
    case "Toyota":
    case "Suzuki":
        console.log("Japanese cars are great");
        break;
    default:
        console.log("your car is not in the top ten companies");
}

const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}
