// Assignment Code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCase = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "=", ":", ";", "?", "/", ",", "."];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Create function to generatepassord
function generatePassword() {

// Create an empty array variable for characters
  var characters = []
  
  // Create an empty array variable for usercharacters
  var userCharacters = []
 
  // Create an empty array variable for possibleCharacters
  var possibleCharacters = []

  // Create an empty array variable for the result
  var result = [];


  var length = parseInt(window.prompt("how long the password to be"));
  console.log(length);
if (length < 8 || length > 128) {
  window.alert("must be a number at least 8 and less 128");
  return null
}
if (isNaN(length)) {
  window.alert("must choose a number");
  return null
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
    return null
  }

  let userOptions = {
    length: length,
    lower: lower,
    number: number
    upper: upper,
    specialCharacter: specialCharacter,

  }

  if(!userOptions) return null;

  if(userOptions.lower) {
    possibleCharacters = possibleCharacters.concat(lowerCase)
    userCharacters.push(getRand(lowerCase))
  }
  if(userOptions.number) {
    possibleCharacters = possibleCharacters.concat(numberCase)
    userCharacters.push(getRand(numberCase))
  }

  for(let i = 0; i < userOptions.length; i++) {
    let possibleCharacter = getRand(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Create a for loop for userCharacters and join the result 

  for(let i = 0; i < userCharacters.length; i++) {
    result[i] = userCharacters[i];
  }

  return result.join("");


}
// Add event listener to generate button
// var generateBtn = document.querySelector('.btn');
generateBtn.addEventListener("click", writePassword);

// function to randomize all the generated elements
function getRand (arr) {
  let randomizer = Math.floor(Math.random() * arr.length);
  let randEl = arr[randomizer];
  console.log(randEl);
  return randEl;
}
