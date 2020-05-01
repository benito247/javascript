let s1 = "X";   //s1 square one 
let s2 = "O";   //s2 square two  
let s3 = "O";   //s3 square three 
let s4 = "O";   //s4 square four
let s5 = "X";   //s5 square five
let s6 = "O";   //s6 square six
let s7 = "O";   //s7 square seven
let s8 = "O";   //s8 square eight
let s9 = "X";   //s9 square nine

console.log(`    |   |   `);
console.log(`  ${s1} | ${s2} | ${s3}`); 
console.log(`    |   |   `); 
console.log(`------------`);
console.log(`    |   |   `);
console.log(`  ${s4} | ${s5} | ${s6}`); 
console.log(`    |   |   `);
console.log(`------------`);
console.log(`    |   |   `);
console.log(`  ${s7} | ${s8} | ${s9}`); 
console.log(`    |   |   `);

//version one
//if (s1 == s2 && s2 == s3) {
    //console.log("you're the winner")}
//else if (s4 == s5 && s5 == s6){
    //console.log("loser")}
//else if (s7 == s8 && s8 == s9){
    //console.log("loser")}


if (s1 == s2 && s2 == s3){
    console.log("you're the winner")
}
else if (s1 == s4 && s4 == s7){
    console.log("you're the winner")
}
else if (s1 == s5 && s5 == s9){
    console.log("you're the winner")
}
else if (s2 == s5 && s5 == s8){
    console.log("you're the winner")
}
else if (s3 == s6 && s6 == s9){
    console.log("you're the winner")
}
else if (s3 == s5 && s5 == s7){
    console.log("you're the winner")
}
else if (s4 == s5 && s5 == s6){
    console.log("you're the winner")
}
else if (s7 == s8 && s8 == s9){
console.log("you're the winner")
}
else{
    console.log("you lose")
}

// To change the winning combination change the square relevent to where i want it to be




