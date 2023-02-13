// Assignment code here

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
  // Arrays    
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqurstuvwxyz"
  var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var numeric = "0123456789"

  // Variables
  var confirmUpperCase;
  var confirmLowerCase;
  var confirmSpecChar;
  var confirmNumeric; 
    
    // Prompts
  function generatePassword() {
    
    let pwLength = parseInt(
      prompt("How long should your password be (Enter 8-128)?")
    )
  }
     
    if (pwLength < 8 && pwLength > 128 ) {
    } else { 
        alert ("Must have a minimum of 8 and max of 128 characters.");
      }
    let upperCase = confirm ("Use upper case letters?");
    let lowerCase = confirm ("Use lower case letters?");
    let specialChar = confirm ("Use special characters?");
    let numeric = confirm ("Use numbers?");
    
    if (
      upperCase === false &&
      lowerCase === false &&
      specialChar === false &&
      numeric === false
    ) {
      alert ("Must select one or more character types to continue.")
    }
  

  passwordText.value = password;



// Add event listener to generate button
const button = document.querySelector("button")
button.addEventListener("click", e => {
  console.log(e)
})
