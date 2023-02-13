//JS password generator

var generateBtn = document.querySelector("#write");

// Write password to the #password input
  // Arrays    
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","u","r","s","t","u","v","w","x","y","z"]
  var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",";","<","=",">","?","@","[","\\","^","_","`","{","|","}",'~']
  var numeric = ['0','1','2','3','4','5','6','7','8','9']

  // Variables
 //
    
    // length
  function writePassword() {
    let pwLength = parseInt(
      prompt("Enter the length of your password between 8-128 characters.")
    )
    
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
  


  function writePassword() {
    //calls in the user choices from passwordOptions()
    let userPasswordChoices = passwordOptions();
    let userChoice = "";
    let password = "";
  
    if (userPasswordChoices.upperCase) {
      userChoice += upperCaseLetters.join("");
    }
    if (userPasswordChoices.lowers) {
      userChoice += lowerCaseLetters.join("");
    }
    if (userPasswordChoices.nums) {
      userChoice += numericChars.join("");
    }
    if (userPasswordChoices.specials) {
      userChoice += specChars.join("");
    }
  
    for (let i = 0; i < userPasswordChoices.strength; i++) {
      let random = Math.floor(Math.random() * userChoice.length);
      password += userChoice.charAt(random);
    }
  
    return password;
  }
    
  // Write password to the #password input
  function writePassword() {
    
    const finalPassword = generatePassword();
  
    var passwordText = document.querySelector("#password");
  
    passwordText.value = finalPassword;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

