//JS password generator

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  // Arrays    
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","u","r","s","t","u","v","w","x","y","z"]
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var numeric = "0123456789"

  // Variables
  var confirmUpperCase;
  var confirmLowerCase;
  var confirmSpecChar;
  var confirmNumeric; 
    
    // Prompts
  function generatePassword() {
    // length
    //var pwLength = parseInt(
      //prompt("How long should your password be (Enter 8-128)?")
    //)
    var pwLength = window.prompt("Enter the length of your password between 8-128 characters.", "8-128")
  }
     
    if (pwLength > 8 && pwLength < 128 ) {
    } else { 
        alert ("Must have a minimum of 8 and max of 128 characters.");
      }
    let upperCaseL = confirm ("Use upper case letters?");
    let lowerCaseL = confirm ("Use lower case letters?");
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
