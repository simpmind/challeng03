// Assignment code here
//Declare variable for selection of characters
var enterLength = "";
var selectSpecial;
var selectNumeric;
var selectUpper;
var selectLower;
// main function
function generatePassword() {
  const enterlength = prompt("How long is your password" );
  // while loop, if user enter less than 8 or more than 128, the user has to enter again
  while(enterlength > 7 && enterlength < 129) { 
    alert(`You chose to have ${enterlength} characters in your password`);
      
       var selectSpecial = confirm("Would you like to include special characters");
       var selectNumeric = confirm("Would you liketo include numeric characters");    
       var selectLower = confirm("Would you like to include lowercase characters");
       var selectUpper = confirm("Would you like to include uppercase characters");
         // Loop if users say no to all selection
         while(selectUpper === false && selectLower === false && selectSpecial === false && selectNumeric === false) {
           alert("You must choose at least one parameter");
           var selectSpecial = confirm("Would you like to include special characters");
           var selectNumeric = confirm("Would you like to include numeric characters");    
           var selectLower = confirm("Would you like to include lowercase characters");
           var selectUpper = confirm("Would you like to include uppercase characters");   
       } 
            // assigne selected type of variable to the array of characters
      var character = []
      
      if (selectSpecial) {
        character = character .concat(special)
      }
  
      if (selectNumeric) {
        character  = character .concat(number)
      }
        
      if (selectLower) {
        character  = character .concat(lower)
      }
  
      if (selectUpper) {
        character = character .concat(upper)
      }
  
        console.log(character )

      // empty string of password
      var Password = "";
      
      for (var i = 0; i < enterlength; i++) {
        Password = Password + character [Math.floor(Math.random() * character .length)];
        console.log(Password)
      }
      return Password;
    }
    // tell users that the password did not qualify
      alert("The password length must be from 8 to 128 characters");
      
    
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
// Declare variable character used for the password
 number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."]
 lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
