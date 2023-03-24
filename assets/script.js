function getUpperL() {
    const upperL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upperL[Math.floor(Math.random() * upperL.length)];
}

function getLowerL() {
    const lowerL = 'abcdefghijklmnopqrstuvwxyz';
    return lowerL[Math.floor(Math.random() * lowerL.length)];
}

 function getNumber() {
    const numbers = '0123456789';
    return numbers[Math.floor(Math.random() * numbers.length)];
 }

function getSymbol() {
    const symbols = "!'#$%&()*+,-./:;<=>?@[]\^{|}";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// function generatePassword() {
//     var password = parseFloat(characters);
//     console.log(typeof password);
// }

function writePassword () {
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");
    // passwordText.value = password;
    const length = parseFloat(prompt("Please insert password length:"));
    console.log(typeof length);
    if (characters < "8" && characters > "128") {
        window.alert("Please insert a valid length.")
    // } else function generatePassword() {
        
    //     const upper = confirm("Do you want to include Uppercase?");
    //     const lower = confirm("Do you want to include Lowercase?");
    //     const number = confirm("Do you want to include numbers?");
    //     const symbol = confirm("Do you want to include special symbols?");
        
    //     if (upper) {
    //         for( var i = 0; i < characters.length; i++) {

    //         }
            
    //     }   
    // }
    }
        
        // document.querySelector("#password").textContent = characters;
        
    
 }


    


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);