var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
var lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
var symbols = ['!', "'", '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '{', '|', '}'];

function userQuestions () {
    var userInput = [];
    var length = prompt("Please insert password length (Between 8 and 128 chacracters)");
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Must have 8 to 128 characters!");
        return false;
    }

    if (confirm ("The password will include lowercases?")) {
        userInput = userInput.concat(lowerCases);
    }

    if (confirm("The password will include uppercases?")) {
        userInput = userInput.concat(upperCases);
    }

    if (confirm("The password will include numbers?")) {
        userInput = userInput.concat(numbers);
    }

    if (confirm("The password will include special chracters?")) {
        userInput = userInput.concat(symbols);
    } 

    if (userInput.length == 0) {
        alert("You must select at leat one type of character");
        return;
    }
    
    var password = '';
    for (var i = 0; i < length; i++ ){
        var character = getRandomItem(userInput);
        password += character;
        }
    //console.log(userInput);
    return password;
}

function getRandomItem(array) {
    var  randomIndex = Math.floor(Math.random()* array.length);
    return array[randomIndex];
}

 function writePassword() {
    var password = userQuestions();
       return document.querySelector("#password").textContent = password;
        
    }
     

     var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
 




    


