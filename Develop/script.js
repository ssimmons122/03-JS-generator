// Assignment code here


// Get references to the #generate element
generateBtn = document.querySelector("#generate");

// Write password to the #password input
    
    // Variables    
    var char = "";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerCase = "abcdefghijklmnopqurstuvwxyz"
    var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var numeric = "0123456789"

    // Prompts
  function generatePassword() {
    var passwordLength = prompt("Password Length: Enter the desired number of characters between 8-128");
      if ( char <= 7 || char >= 129 ){
        alert ("Please choose a number between 8 and 128.")
      }
    var specialChar = prompt("Include special characters?");
    var upperCase = prompt("Include uppercase characters?");
    var lowerCase = prompt("Inlude lowercase characters?");
    var numeric = prompt("Include numbers?");
    var password ="";
  for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * char.Length);
      password += char.substring(randomNumber, randomNumber +1);
      }
      document.getElementById("password").value = password; 
  }
  //passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
