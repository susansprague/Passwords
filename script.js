// Assignment Code
var generateBtn = document.querySelector("#generate");


// Generate password
function generatePassword() {
  let password = '';
  let chars = "";
  let passwordLength = parseInt(window.prompt("Please enter your password length"));
  console.log(passwordLength)
if(passwordLength<8 || passwordLength>128 || isNaN(passwordLength)) {
  alert("Please enter a length between 8 and 128");
  return "Please try again"
} 
if(confirm ("Would you like lowercase letters?")) {
  chars += "abcdefghijklmnopqrstuvwxyz";
}
  if (confirm("Would you like uppercase letters?")) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("Would you like numbers?")) {
    chars += "0123456789";
  }
  if (confirm("Would you like specials?")) {
    chars += "!@#$%&*()";
  } 
  console.log(chars)
  if (chars==="") {
    alert("Must choose at least one character type")
    return "Please try again"
  }
  for(var i=0; i<passwordLength; i++) {
    let charindex=Math.floor(Math.random()*chars.length)
    let digit=chars.charAt(charindex)
    password+=digit
  }
return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
