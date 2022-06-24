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
  var lower = confirm("Would you like to use lowercase letters", "Please type yes or no");
  var upper = confirm("Would you like to use uppercase letters", "Please type yes or no");
  var number = confirm("Would you like to use numerical letters", "Please type yes or no");
  var special = confirm("Would you like to use special letters", "Please type yes or no");
  var password = '';
  var allCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", 
  "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*"];
  var allCharactersLength = allCharacters.length;

  console.log(allCharactersLength);

  if (length < 8 || length > 128) {
    alert("Password length must be from 8 to 128 characters");
  } else if (lower === false && upper === false && number === false && special === false) {
    alert("Please choose at least one character type");
  } else if (lower === true && upper === true && number === true && special === true) {
      for (i = 0; i < allCharactersLength; i++) {
      password = pallCharacters.charAt(Math.floor(Math.random() * Math.floor(allCharactersLength -1)));
      return password;
      }
    }
}
// noyesnono = 
// nonoyesno = 
// nononoyes = 
// yesyesnono = 
// noyesyesno = 
// nonoyesyes = 
// yesnonoyes = 
// yesyesyesno = 
// noyesyesyes = 
// yesyesyesyes =