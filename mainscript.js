// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','{','|','}','~'];
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var num = ['0','1','2','3','4','5','6','7','8','9']
var passwordLength = '' //intialize as an empty global variable//to be determined by user input
var minlength = 8;
var maxlength = 128;

// Write password to the #password input //provided JavaSript
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password; 
  };
//function & if else statement gathers all the user inputs
function generatePassword() {
  var passResults = [];
  var passOptions = []; 
    passwordLength = Number(prompt("Choose password length between 8 and 128 characters"));
    if (passwordLength >= minlength && passwordLength <= maxlength) {
   var confUpperCase = confirm("Would you like to include uppercase letters?");
   var confLowerCase = confirm("Would you like to include lowercase letters?");
   var confSpecialChar = confirm("Would you like to include special characters?");
   var confNum = confirm("Would you like to include numbers?");
  }  
    else if (passwordLength < minlength || passwordLength > maxlength) {
      alert("Must meet length requirements!");
    }
    else if (passwordLength = "null" || passwordLength === (lowerCaseChar || upperCaseChar)) {
      alert("Please choose a number between 8-128");
    }
    else {
     return; 
  }
// mutliple if statements concatenate the specificied array to the empty array of passOptions & continue to do so based on user selection
if (confUpperCase) {
  passOptions = passOptions.concat(upperCaseChar);
}

if (confLowerCase) {
  passOptions = passOptions.concat(lowerCaseChar);
}

if (confSpecialChar) {
   passOptions = passOptions.concat(specialCharacters);
}

 if (confNum) {
  passOptions = passOptions.concat(num);
}

console.log(passOptions);
//for loop to that takes passOption array (which should include all user selected inputs) and uses the passwordOptions array length to randomly generate a password into the passResults array based on the selected characters for password length
for (i=0; i < passwordLength; i++) {
passResults += passOptions[Math.floor(Math.random() * passOptions.length)]
 }
console.log(passResults); 
return passResults
};


// Add event listener to generate button//provided JavaScript
generateBtn.addEventListener("click", writePassword);


