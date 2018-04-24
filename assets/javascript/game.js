//VARIABLES SETUP
var wordBank = ['MEPHISTO', 'AESHMA', 'BEELZEBUB', 'BELPHEGOR', 'LEVIATHAN', 'MOLOCH', 'PANZUZU', 'VASSAFOR', 'SATHANAS', 'DIABLO'];
var secretWord = wordBank[Math.floor(Math.random()*10)];
var displayWord = "";
var invalidKeys = ['1','2','3','4','5','6','7','8','9','0',"'",'/','[',']',',', '.','-','=',';','`']

while (displayWord.length < secretWord.length) {
    displayWord += '-'
}

//HELPERS
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
function imgProgress(imgSrc) {
    let currentJpg = imgSrc[23];
    imgSrc.toString().replaceAt(23, (currentJpg+1).toString())
}

//HANGMAN LINE SETUP
document.getElementById("hangmanLine").innerHTML = displayWord;

//GAMEPLAY
document.onkeypress = function(event) {
    var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();
    var hitIndices = [];
    if (secretWord.includes(keyPressed)) {
        //KEY PRESSED IS A HIT
                                    // BROKEN; ONLY FIRST HIT GETS REVEALED
                                    // hitIndex = secretWord.indexOf(keyPressed);
                                    // displayWord = displayWord.replaceAt(hitIndex, keyPressed);
                                    // displayWord = displayWord.replaceAt(hitIndex, keyPressed);
                                    // displayWord = displayWord.replaceAt(hitIndex, keyPressed);
        for(let i=0; i<secretWord.length ; i++) {
            if (secretWord[i] === keyPressed) hitIndices.push(i);
        };

        for(let j=0 ; j<displayWord.length ; j++) { //outer looping through displayWord
            for (let g=0 ; g<hitIndices.length ; g++) { //inner looping through hitIndices
                if (hitIndices[g]==j) {
                    displayWord = displayWord.replaceAt(j, keyPressed);
                }
            }
        };
        document.getElementById("hangmanLine").innerHTML = displayWord;
    } else if (invalidKeys.includes(keyPressed)) {
        //KEY PRESSED ISN'T A LETTER
        alert('The Lords of Hell do not concern themselves with numbers and punctuation.');
    } else {
        //KEY PRESSED IS A MISS
        document.getElementById('pentagramStatus').src='assets/images/pentagram1.jpg'
    };
};

