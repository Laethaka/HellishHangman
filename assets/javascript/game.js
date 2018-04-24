//VARIABLES SETUP
var wordBank = ['MEPHISTO', 'AESHMA', 'BEELZEBUB', 'BELPHEGOR', 'LEVIATHAN', 'MOLOCH', 'PANZUZU', 'VASSAFOR', 'SATHANAS', 'DIABLO'];
var secretWord = wordBank[Math.floor(Math.random()*10)];
var displayWord = "";
var hitIndices = [];

while (displayWord.length < secretWord.length) {
    displayWord += '-'
}

//HANGMAN LINE SETUP
document.getElementById("hangmanLine").innerHTML = displayWord;

//KEYBOARD LISTENING
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

document.onkeypress = function(event) {
    var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();
    if (secretWord.includes(keyPressed)) {
        //KEY PRESSED IS A HIT
                                    // hitIndex = secretWord.indexOf(keyPressed);
        for(let i=0; i<secretWord.length;i++) {
            if (secretWord[i] === keyPressed) hitIndices.push(i);
        }
                                    //displayWord = displayWord.replaceAt(hitIndex, keyPressed);
        for(let j=0; j<displayWord.length;j++) {
            if ()
        }
        document.getElementById("hangmanLine").innerHTML = displayWord;
                                    //ONLY FIRST HIT GETS REVEALED
    // } else if (keyPressed == "") {
    //     //KEY PRESSED ISN'T A LETTER
    //     break;
    // } else {
    //     //KEY PRESSED IS A MISS
    //     document.getElementById('pentagramStatus').src='assets/images/pentagram1.jpg'
    };
};

