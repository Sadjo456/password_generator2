// Assignment Code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCase = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "=", ":", ";", "?", "/", ",", "."];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  var characters = []

  var length = window.prompt("how long the password to be");
  console.log(length);
if (length < 8 || length > 128 || isNaN(length)) {
  window.alert("must be a number at least 8 and less 128");
  return
}

  var lower = window.confirm("do you want lowercase character");
  console.log(lower);
  var upper = window.confirm("do you want uppercase");
  var number = window.confirm("do you want number");
  console.log(number);
  console.log(upper);
  var specialCharacter = window.confirm("do you want special character");
  console.log(specialCharacter);
  if (!lower && !upper && !specialCharacter && !number) {
    window.alert("you must choose at least one character");
    return 
  }
  if (lower){
    characters.push(...lowerCase)
  }
  if (upper){
    characters.push(...upperCase)
  }
  if (number){
    characters.push(...numberCase)
  }
  if (specialCharacter){
    characters.push(...specialCase)
  }
  console.log(characters)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
