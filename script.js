// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!","/","$","%","&","(", ")", "*", "+", "-", ".", ":",";", "<", "=",">", "?", "@", "[", "]", "^", "_","{", "|", "}", "~"];
var upperCaseChar = ['A','B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseChar = upperCaseChar.map(upperCaseChar => upperCaseChar.toLowerCase());
var num = ['0','1','2','3','4','5','6','7','8','9'];
var passwordLength; //intialize as an empty global variable
var minlength = 8;
var maxlength = 128;
var passOptions = [] //empty array will be used for the generated password results
var confUpperCase; // to store input from user upon selection
var confLowerCase; // to store input from user upon selection
var confSpecialChar; // to store input from user upon selection
var confNum; // to store input from user upon selection

// Write password to the #password input


var passwordText = document.querySelector("#password");
var password = generatePassword();
passwordText.value = password;

function generatePassword() {
  console.log(passwordLength);
  if (confUpperCase === true && confSpecialChar === true) {
  for (i=0; i < passwordLength; i++ ) {
  let results = math.floor(math.random() * 50);
  passOptions += results.concat(upperCaseChar, specialCharacters);
}}
return passOptions
};

generatePassword(passwordLength)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
passwordLength = Number(prompt("Choose password length between 8 and 128 characters"));
  if (passwordLength > minlength && passwordLength < maxlength) {
 confUpperCase = confirm("Would you like to include uppercase letters?");
  // confirm("Would you like to include lowercasce letters?");
 confSpecialChar = confirm("Would you like to include special characters?");
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

//var userInput = passwordLength
