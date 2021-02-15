// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";
var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var passwordLength = '' //intialize as an empty global variable
var minlength = 8;
var maxlength = 128;
var confUpperCase;
var confSpecialChar;

// Write password to the #password input
function writePassword() {
  passwordLength = Number(prompt("Choose password length between 8 and 128 characters"));
    if (passwordLength >= minlength && passwordLength <= maxlength) {
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
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password; 
  };

function generatePassword() {
  var passOptions = '';
  console.log(passwordLength);
  if(confUpperCase,confSpecialChar) {
  for (i=0; i < passwordLength; i++ ) {
  passOptions = Math.floor(Math.random() * passwordLength);
  passOptions += upperCaseChar.concat(specialCharacters)
  } 
}
return passOptions
};

generatePassword()


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


