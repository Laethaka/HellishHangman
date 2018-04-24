//VARIABLES SETUP
var wordBank = ['MEPHISTO', 'AESHMA', 'BEELZEBUB', 'BELPHEGOR', 'LEVIATHAN', 'MOLOCH', 'PANZUZU', 'VASSAFOR', 'SATHANAS', 'DIABLO'];
var secretWord = wordBank[Math.floor(Math.random()*10)];
var displayWord = ""

while (displayWord.length < secretWord.length) {
    displayWord += '-'
}

//HANGMAN LINE DISPLAY
document.getElementById("hangmanLine").innerHTML = displayWord;

//KEYBOARD LISTENING
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

document.onkeypress = function(event) {
    var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();
    if (secretWord.includes(keyPressed)) {
        //KEY PRESSED IS A HIT
        alert('a hit!')
        var hitIndex = secretWord.indexOf(keyPressed);
        displayWord.replaceAt(hitIndex, keyPressed);
    };
};

