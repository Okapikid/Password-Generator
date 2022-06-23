// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction() {
  let length = prompt("Choose the length of your password", "Select a number between 8 and 128");
  if (length >= 7 && length <= 128) {
    prompt("Would you like to include lowercase letters?", "Click OK for yes or Cancel for no");
  } 
}