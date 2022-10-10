const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let outputOne = document.querySelector(".output-one");
let outputTwo = document.querySelector(".output-two");
let generateButton = document.querySelector(".btn-generate");
let copiedOne = document.getElementById("copied-one");
let copiedTwo = document.getElementById("copied-two");
let passwordsArray = [];
let passwordLength = 15;
let clickedOutputOne = false;
let clickedOutputTwo = false;


function createPassword(){
    checkHiddenStatus();
    passwordsArray = []
    let counter = 2;
    while(counter > 0) {
        let tempPassword = "";
        let character = "";
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length);
            character = characters[randomNumber]
            tempPassword += character;
           }
        passwordsArray.push(tempPassword);
        counter--
    }
    displayPasswords();
}

function displayPasswords(){
    outputOne.textContent = passwordsArray[0];
    outputTwo.textContent = passwordsArray[1];
}

function copyPassword(){
    let cb = navigator.clipboard;
    if(clickedOutputOne){
        cb.writeText(outputOne.textContent).then(() => console.log('Output one', outputOne.textContent));
        if(copiedOne.classList.contains("hidden")){
            copiedOne.classList.toggle("hidden");
        }
    } else if(clickedOutputTwo) {
        cb.writeText(outputTwo.textContent).then(() => console.log('Output two', outputTwo.textContent));
        if(copiedTwo.classList.contains("hidden")){
            copiedTwo.classList.toggle("hidden");
        }
    }
    clickedOutputTwo = false;
    clickedOutputOne = false;
}

function checkHiddenStatus(){
if(!copiedOne.classList.contains("hidden")) {
    copiedOne.classList.toggle("hidden");
}
if(!copiedTwo.classList.contains("hidden")) {
    copiedTwo.classList.toggle("hidden");
}
}


generateButton.addEventListener("click", createPassword);
outputOne.addEventListener("click", function() {
    clickedOutputOne = true;
});
outputTwo.addEventListener("click", function() {
    clickedOutputTwo = true;
});
outputOne.addEventListener("click", copyPassword);
outputTwo.addEventListener("click", copyPassword);

