// Assigns the generateBtn variable to clicking on the Generate Password button
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

  var password = "";
  var length = prompt("Choose a length for your password", "Input your desired password length from 8 to 128 characters");
  var lower = confirm("Would you like to use lowercase letters", "Please type yes or no");
  var upper = confirm("Would you like to use uppercase letters", "Please type yes or no");
  var number = confirm("Would you like to use numerical letters", "Please type yes or no");
  var special = confirm("Would you like to use special letters", "Please type yes or no");
  var allCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", 
  "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*"];

// returns an alert of invalid number of characters is chosen
  if (length < 8 || length > 128) {
    alert("Password length must be from 8 to 128 characters");
// returns an alert if no character types are chosen
  } else if (lower === false && upper === false && number === false && special === false) {
    alert("Please choose at least one character type");
// returns password string if all character types are chosen
  } else if (lower === true && upper === true && number === true && special === true) {
      for (i = 0; i < length; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
      }
      return password;
// returns password string if all character types are chosen except special
  } else if (lower === true && upper === true && number === true && special === false) {
     allCharacters.splice(62, 8);
      for (i = 0; i < length; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
      }
      return password;
// returns password string if lower and upper are chosen
  } else if (lower === true && upper === true && number === false && special === false) {
    allCharacters.splice(52, 18);
     for (i = 0; i < length; i++) {
       password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
     }
     return password;
// returns password string if only lower is chosen
  } else if (lower === true && upper === false && number === false && special === false) {
  allCharacters.splice(26, 44);
   for (i = 0; i < length; i++) {
     password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
   }
   return password;
// returns password string if all are chosen except lower
  } else if (lower === false && upper === true && number === true && special === true) {
    allCharacters.splice(0, 26);
     for (i = 0; i < length; i++) {
       password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
     }
     return password;
// returns password string if number and special are chosen
  } else if (lower === false && upper === false && number === true && special === true) {
    allCharacters.splice(0, 52);
     for (i = 0; i < length; i++) {
       password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
     }
     return password;
// returns password string if only special is chosen
  } else if (lower === false && upper === false && number === false && special === true) {
    allCharacters.splice(0, 62);
     for (i = 0; i < length; i++) {
       password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
     }
     console.log(password);
     return password;
// returns password string if upper and special are chosen
  } else if (lower === false && upper === true && number === false && special === true) {
    allCharacters.splice(0, 26);
    allCharacters.splice(26, 10);
      for (i = 0; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
   return password;
// returns password string if lower and number are chosen
  } else if (lower === true && upper === false && number === true && special === false) {
    allCharacters.splice(26, 26);
    allCharacters.splice(36, 8);
      for (i = 0; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
   return password;
// returns password string if upper and number are chosen
  } else if (lower === false && upper === true && number === true && special === false) {
    allCharacters.splice(0, 26);
    allCharacters.splice(36, 8);
      for (i = 0; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
   return password;
// returns password string if lower and special are chosen
  } else if (lower === true && upper === false && number === false && special === true) {
    allCharacters.splice(26, 36);
      for (i = 0; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
   return password;
// returns password string if only upper is chosen
  } else if (lower === false && upper === true && number === false && special === false) {
    allCharacters.splice(0, 26);
    allCharacters.splice(26, 18);
      for (i = 0; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
   return password;
// returns password string if only number is chosen
  } else if (lower === false && upper === false && number === true && special === false) {
    allCharacters.splice(0, 52);
    allCharacters.splice(10, 8);
      for (i = 0; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
   return password;
// returns password string if lower, upper, and special are chosen
  } else if (lower === true && upper === true && number === false && special === true) {
    allCharacters.splice(52, 10);
      for (i = 0; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
   return password;
// returns password string if lower, number, and special are chosen
  } else if (lower === true && upper === false && number === true && special === true) {
    allCharacters.splice(26, 26);
      for (i = 0; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
   return password;
  }
}