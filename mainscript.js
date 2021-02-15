// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','{','|','}','~'];
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var num = ['0','1','2','3','4','5','6','7','8','9']
var passwordLength = '' //intialize as an empty global variable
var minlength = 8;
var maxlength = 128;
var passOptions = [];
var passResults = [];

// Write password to the #password input //provided JavaSript
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password; 
  };

function generatePassword() {
    passwordLength = Number(prompt("Choose password length between 8 and 128 characters"));
    if (passwordLength >= minlength && passwordLength <= maxlength) {
   confUpperCase = confirm("Would you like to include uppercase letters?");
   confLowerCase = confirm("Would you like to include lowercase letters?");
   confSpecialChar = confirm("Would you like to include special characters?");
   confNum = confirm("Would you like to include numbers?");
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

if (confUpperCase) {
  passOptions += passOptions.concat(upperCaseChar);
}

if (confLowerCase) {
  passOptions += passOptions.concat(lowerCaseChar);
}

if (confSpecialChar) {
  passOptions += passOptions.concat(specialCharacters);
}

if (confNum) {
  passOptions += passOptions.concat(num);
}

for (i=0; i < passwordLength; i++) {
passResults += passOptions[Math.floor(Math.random() * passwordLength)]; 
 }
return passResults
};


// Add event listener to generate button//provided JavaScript
generateBtn.addEventListener("click", writePassword);