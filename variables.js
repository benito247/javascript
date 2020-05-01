//To understand how variable works in Javascript//
//To understand and use operators to store values and do calculations//
//To use camelCase when naming variables//
//To understand how to access data in variables//

console.log("All Around the World!".toUpperCase().charAt(7));//display the 8th character in upper case on the console//

//variables are We store items in boxes to retrieve later different items can be stored in the box at different times//

//cash machine challenge://
let correctpin = 2020;
let balance = 1000;

const withdraw = (pin, amount) => {

    if (pin === correctpin && amount <= balance){
        balance -= amount
        console.log(`Withdrawing £${amount} please wait for your cash, your new balance is £${balance}`); 
    }
        else if (pin === correctpin && amount >= balance){
            console.log(`You do not have enough money please try a different amount`)
        }
        else {
            console.log("Incorrect pin entered please try again")
     }
}

withdraw (2020, 500);
withdraw (2020, 2000);
withdraw (1984, 300);
//so variables allow us to store data inside them, access them via a name, then place new data in them whenever we want//
