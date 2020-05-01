// palindrome numbers activity 4

let palindrome = 20202; // a palindrome looks the same forward as it does backwards e.g 1001
let string = palindrome.toString();
let splitString = string.split("");
let reverseArray = splitString.reverse();
let joinArray = reverseArray.join("");

if (palindrome == joinArray) {
    console.log("This is a Palindrome");
}
else {
    console.log("This is not a Palindrome");
}

