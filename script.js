// Assignment Code
let generateButton = document.querySelector("#generate");

// Write password to the #password input and rewrite button text
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

function generatePassword() {
    // Asking for length of the password
    let length = parseInt(prompt("Enter the length of the password (must be between 8 and 128 characters):"));
  
    // Confirming that input is valid
    while (isNaN(length) || length < 8 || length > 128) {
      length = parseInt(prompt("Please enter a number between 8 and 128:"));
    }

    // Asking for password criteria
    let hasLowercase = confirm("Do you want lowercase letters?");
    let hasUppercase = confirm("Do you want uppercase letters?");
    let hasNumbers = confirm("Do you want numeric characters?");
    let hasSpecial = confirm("Do you want special characters?");
