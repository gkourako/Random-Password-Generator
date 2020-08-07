function generate(){ 
  console.log("button works!")

  var lowerC = ("abcdefghijklmnopqrstuvwxyz").split("");
  var upperC = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
  var numbers = ("0123456789").split("");
  var numberOfChar = parseInt(prompt ("How many characters would you like?"))

  var pickedLettersArr = []

  var passwordString = ''

  if(confirm("Would you like lowercase?")) {
    pickedLettersArr.push(lowerC)
  }

  console.log(numberOfChar, pickedLettersArr)

  if(confirm("Would you like uppercase?")) {
    pickedLettersArr.push(upperC)
  }

  if(confirm("Would you like numbers?")) {
    pickedLettersArr.push(numbers)
  }

  console.log(pickedLettersArr)
  
  // function generate(){ 
  //   console.log("button works!")
  for(var i = 0; i < numberOfChar; i++) {
    var randomLetter = Math.floor(Math.random() * pickedLettersArr.length);

    var randomNumber = Math.floor(Math.random() * pickedLettersArr[randomLetter].length); 
    var password = pickedLettersArr[randomLetter][randomNumber]
    passwordString += password
    console.log(randomLetter, randomNumber, password)
    
  }
  
  console.log(passwordString)
  document.getElementById("randompassword").innerHTML = passwordString
}
// Assignment Code
  // var generateBtn = document.querySelector("#generate");

  // // Write password to the #password input
  // function writePassword() {
  //   var password = generatePassword()
  //       passwordText = document.querySelector("#password");
      
  //   passwordText.value = password;

  // }

  // // Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword); {
  //   prompt ("Lowercase?")
  // }


