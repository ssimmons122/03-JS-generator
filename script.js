// Assignment code here


// Get references to the #generate element
// generateBtn = document.querySelector("#generate");
let length = window.prompt("Password Length: Enter the desired number of characters between 8-128")
// Write password to the #password input
    
    // Arrays    
    var char = "";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerCase = "abcdefghijklmnopqurstuvwxyz"
    var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var numeric = "0123456789"

    // Variables
    var confirmChar = "";
    var confirmUpperCase;
    var confirmLowerCase;
    var confirmSpecChar;
    var confirmNumeric; 
    
    // Prompts
  function generatePassword() {
    var passwordLength = window.prompt("Password Length: Enter a password length between 8-128 characters.");
      if (char < 7 || char > 129 ){
        alert ("Please choose a number between 8 and 128.");
      }return null;

  }
  //passwordText.value = password;



// Add event listener to generate button
const button = document.querySelector("button")
button.addEventListener("click", e => {
  console.log(e)
})
