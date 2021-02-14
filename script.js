// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!","/","$","%","&","(", ")", "*", "+", "-", ".", ":",";", "<", "=",">", "?", "@", "[", "]", "^", "_","{", "|", "}", "~"];
var upperCaseChar = ['A','B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseChar = upperCaseChar.map(upperCaseChar => upperCaseChar.toLowerCase());
var num = ['0','1','2','3','4','5','6','7','8','9'];
var passwordLength;
var minlength = 8;
var maxlength = 128;
var passOptions = []

// Write password to the #password input

// function generatePassword (
//   passwordLength,
//   specialCharacters,
//   upperCaseChar,
//   lowerCaseChar,
//   num) {
//     return "TEST"
//   };


var password = generatePassword();

let confUpperCase = true;
let confSpecialChar = true;
let userInput = passwordLength;

function generatePassword(
  userInput,
  confSpecialChar,
  confUpperCase) 
  {
  return "TEST"
}

var passwordText = document.querySelector("#password");


  // passwordText.value = password;
  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
var passwordLength = window.prompt("Choose password length between 8 and 128 characters");
if (passwordLength > minlength && passwordLength < maxlength) {
  confirm("Would you like to include uppercase letters?");
  // confirm("Would you like to include lowercasce letters?");
  confirm("Would you like to include special characters?");
  // confirm("Would you like to include numbers?");
}  
else if (passwordLength < minlength || passwordLength > maxlength) {
    alert("Must meet length requirements!");
  }
else if (passwordLength = "null" || passwordLength === (lowerCaseChar || upperCaseChar)) {
    alert("Please choose a number between 8-128");
  }
else {
   alert("Please start over")
}
 
};



// writePassword();
generatePassword ();

// var confUpperCase = confirm("Would you like to include uppercase letters?");
// var confLowerCase = confirm("Would you like to include lowercasce letters?");
// var confSpecialChar = confirm("Would you like to include special characters?");
// var confNum = confirm("Would you like to include numbers?");
// var userInput = passwordLength
