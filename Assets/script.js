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

function generatePassword() {
  var length = prompt("Choose a length for your password", "Input your desired password length from 8 to 128 characters");
  var lower = prompt("Would you like to use lowercase letters", "Please type yes or no");
  var upper = prompt("Would you like to use uppercase letters", "Please type yes or no");
  var number = prompt("Would you like to use numerical letters", "Please type yes or no");
  var special = prompt("Would you like to use special letters", "Please type yes or no");

console.log(lower + upper + number + special);

allCharacters = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#]
nononono = 
yesnonono = 
noyesnono = 
nonoyesno = 
nononoyes = 
yesyesnono = 
noyesyesno = 
nonoyesyes = 
yesnonoyes = 
yesyesyesno = 
noyesyesyes = 
yesyesyesyes = 
}