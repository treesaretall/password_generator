// Assignment Code
let generateButton = document.querySelector("#generate");

// Write password to the #password input and rewrite button text
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  //Changes button text after password is given
  let generateButton = document.getElementById("generate");
  generateButton.innerHTML = "Here's your password!";
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

function generatePassword() {
    // Asking for length of the password
    let length = parseInt(prompt("Enter a length for the password between 8 and 128 characters:"));
  
    // Confirming that input is valid
    while (isNaN(length) || length < 8 || length > 128) {
      length = parseInt(prompt("Please enter a number between 8 and 128:"));
    }

    // Asking for password criteria
    let hasLowercase = confirm("Do you want lowercase letters?");
    let hasUppercase = confirm("Do you want uppercase letters?");
    let hasNumbers = confirm("Do you want numeric characters?");
    let hasSpecial = confirm("Do you want special characters?");

    //Establishes different character sets
    let lowercase = "abcdefghijklmnopqrstuvwxyz"
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "123456789"
    let special= "!@#$%^&*()`~-_=+[{]}|;:,<.>/?"

    //Compiles selected character sets into one pot
    let characters = "";
    if (hasLowercase) {
      characters += lowercase
    }
    if (hasUppercase) {
      characters += uppercase
    }
    if (hasNumbers) {
      characters += numbers
    }
    if (hasSpecial) {
      characters += special
    }
    
    //Does the selecting of characters from pot and establishes password
    let password = "";
    for (i=0; i<length; i++) {
      let randomcharacters = Math.floor(Math.random() * characters.length);
      password+= characters[randomcharacters]
    }
  return password
}