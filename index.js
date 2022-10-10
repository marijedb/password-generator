const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

// Select elements from the dom. 
let outputOne = document.querySelector(".output-one");
let outputTwo = document.querySelector(".output-two");
let generateButton = document.querySelector(".btn-generate");
let copiedOne = document.getElementById("copied-one");
let copiedTwo = document.getElementById("copied-two");
let switchMode = document.getElementById("switch-mode");
let body = document.querySelector("body");
let mainContainer = document.querySelector(".main-container");
let copiedContainer = document.querySelector(".copied-container");
let hr = document.querySelector("hr");
let subTitle = document.getElementById("sub-title");

// Set starting values
let passwordsArray = [];
let passwordLength = 15;
let clickedOutputOne = false;
let clickedOutputTwo = false;


function createPassword() {
    // First it checks if copied to clipboard text is hidden or not. 
    // If not then it hides it first before continueing. 
    checkHiddenStatus();

    // Resets passwordsArray first before creating 2 new passwords. 
    passwordsArray = []

    // Starts counter on 2 to make while loop run twice. 
    // This guarantees that the for loop creates 2 different passwords. 
    let counter = 2;
    while (counter > 0) {
        // Set temporary password string and character string. 
        let tempPassword = "";
        let character = "";
        for (let i = 0; i < passwordLength; i++) {
            // Creates randomnumber as long as the characters array to make sure all characters can be selected. 
            let randomNumber = Math.floor(Math.random() * characters.length);
            // Then randomnumber will be used to pick an array item from charactes array. 
            // Then it gets added to the tempPassword string. 
            tempPassword += characters[randomNumber]
        }
        // After loop is done the current tempPassword will be pushed inside the passwordsArray. 
        passwordsArray.push(tempPassword);
        counter--
    }

    // After 2 passwords are generated the displayPasswords will be called.
    displayPasswords();
}

function displayPasswords() {
    // In both of the output buttons the text content will be changed into the newly
    // generated passwords from the createPassword function. 
    outputOne.textContent = passwordsArray[0];
    outputTwo.textContent = passwordsArray[1];
}

function copyPassword() {
    // navigator will be used to use copy items to the clipboard of the users. 
    let cb = navigator.clipboard;
    // Here it checks if the first output button is clicked. If so it runs this part.
    if (clickedOutputOne) {
        // this line will put the textcontent of the outputOne button to the clipboard. 
        cb.writeText(outputOne.textContent);
        // If copiedTwo doesn't contain hidden, hide it first. 
        if(!copiedTwo.classList.contains("hidden")){
            copiedTwo.classList.toggle("hidden");
        } 
        // If copiedOne contains hidden, remove hidden. 
        if (copiedOne.classList.contains("hidden")) {
            copiedOne.classList.toggle("hidden");
        }

    // Here it will be checked if second output button is clicked. If so it runs this part. 
    } else if (clickedOutputTwo) {
        // this line will put the textcontent of the outputTwo button to the clipboard. 
        cb.writeText(outputTwo.textContent);
        if(!copiedOne.classList.contains("hidden")){
            copiedOne.classList.toggle("hidden");
        } 
        if (copiedTwo.classList.contains("hidden")) {
            copiedTwo.classList.toggle("hidden");
        }
    }
    // These 2 lines will reset the clicked state of the buttons. 
    // If not they will always be in the clicked state. 
    clickedOutputTwo = false;
    clickedOutputOne = false;
}

function checkHiddenStatus() {
    // if theres no hidden class in the copiedOne, then add hidden class. 
    if (!copiedOne.classList.contains("hidden")) {
        copiedOne.classList.toggle("hidden");
    }
    // if theres no hidden class in the copiedTwo, then add hidden class. 
    if (!copiedTwo.classList.contains("hidden")) {
        copiedTwo.classList.toggle("hidden");
    }
}


function toggleMode(){
    // This will toggle all of the following elements with according classes. 
    // This will help switch the mode between dark and light depending on the current state. 
    body.classList.toggle("mode-body");
    mainContainer.classList.toggle("mode-main-container");
    hr.classList.toggle("mode-hr");
    subTitle.classList.toggle("mode-sub-title");
    copiedContainer.classList.toggle("mode-copied-container");
}


// All addEventListeners are listed below. 
generateButton.addEventListener("click", createPassword);
outputOne.addEventListener("click", function () {
    clickedOutputOne = true;
});
outputTwo.addEventListener("click", function () {
    clickedOutputTwo = true;
});
outputOne.addEventListener("click", copyPassword);
outputTwo.addEventListener("click", copyPassword);
switchMode.addEventListener("click", toggleMode)
