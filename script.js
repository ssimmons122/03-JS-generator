//JS password generator

const generateBtn = document.querySelector("#generate"); 
   
// Write password to the #password input

const user_Choice = 
   upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] ,
   lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
   specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",";","<","=",">","?","@","[","\\","^","_","`","{","|","}",'~'], 
   numeric = [0,1,2,3,4,5,6,7,8,9] 


  var length = window.prompt("Enter a password length between 8-128 characters."); 
if (length > 8 && length < 128 ) {
} else  
  window.alert("Must have a minimum of 8 and max of 128 characters.");


    var upperCase = window.confirm ("Use upper case letters?");
      if (upperCase) {
        pwLength += user_Choice.upperCase
      }

    var lowerCase = window.confirm ("Use lower case letters?");
      if (lowerCase) {
        pwLength += user_Choice.lowerCase
    }
    var specialChar = window.confirm ("Use special characters?");
      if (specialChar) {
        pwLength += user_Choice.specialChar
    }

    var numeric = window.confirm ("Use numbers?");
      if (numeric) {
        pwLength += user_Choice.numeric
    }

     
    if (
      upperCase === false &&
      lowerCase === false &&
      specialChar === false &&
      numeric === false
    ) {
      window.alert("Must select one or more character types to continue.")
    }
  
  

    var password = "";
    for (let i = 0; i < length; i++) {
      password += pwLength[Math.floor(Math.random() * pwLength.length)]
    

    console.log(password());

    return password;
  
  
  }

