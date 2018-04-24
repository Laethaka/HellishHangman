//VARIABLES SETUP
var wordBank = ['Mephisto', 'Aeshma', 'Beelzebub', 'Belphegor', 'Leviathan', 'Moloch', 'Pazuzu', 'Vassafor', 'Sathanas', 'Diablo'];
var secretWord = wordBank[Math.floor(Math.random()*10)];
var displayWord = ""

while (displayWord.length < secretWord.length) {
    displayWord += '-'
}

//KEYBOARD LISTENING
document.onkeydown = function(event) {
    var keyPressed = String.fromCharCode(event.keyCode);
}



console.log(secretWord);
console.log(displayWord);