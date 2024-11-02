
// Play Now Function for OnClick Event
function playNow() {
    hideSectionbyID('home-screen');
    showSectionbyID('play-ground');
    hideSectionbyID('final-score');

    // Reseting the Score and Life
    document.getElementById('current-life').innerText = 5;
    document.getElementById('current-score').innerText = 0;

    // Reseting the Color and Continue Game
    resetColor();
    continueGame();
}

// Function For Showing Section or Element
function showSectionbyID(elementID) {
    const getShowElementById = document.getElementById(elementID);
    const showElementbyIdClassList = getShowElementById.classList;
    showElementbyIdClassList.remove('hidden');
}

// Function For Hiding Section or Element
function hideSectionbyID(elementID) {
    const getHideElementById = document.getElementById(elementID);
    const hideElementbyIdClassList = getHideElementById.classList;
    hideElementbyIdClassList.add('hidden');
}

// Function For Keyup Handler and Set Conditional Logic For Score and Life
function handleKeyupEvent(event) {
    const playerPressed = event.key;

    // Press ESC to Finish the Game
    if (playerPressed === 'Escape') {
        gameOver();
    }

    //  Getting Current Display Alphabet in LowerCase
    const getCurretDisplayAlphabet = document.getElementById('current-alphabet');
    const currentDisplayAlphabetUppcase = getCurretDisplayAlphabet.innerText;
    const currentDisplayAlphabet = currentDisplayAlphabetUppcase.toLocaleLowerCase();
    //console.log(currentDisplayAlphabet);

    // Setting Up the Conditional Logic For Increate Score
    if (playerPressed === currentDisplayAlphabet) {
        const getCurrentScore = document.getElementById('current-score');
        const getCurrentScoreText = getCurrentScore.innerText;
        const currentScore = parseInt(getCurrentScoreText);
        getCurrentScore.innerText = currentScore + 1;

        // Remove Current Key Background
        removeBackgroundByID(currentDisplayAlphabet);
    }

    // Decrease Life
    else {
        const getCurrnetLife = document.getElementById('current-life');
        const getCurrentLifeText = getCurrnetLife.innerText;
        const currentLife = parseInt(getCurrentLifeText);
        getCurrnetLife.innerText = currentLife - 1;

        if (currentLife == 0) {
            gameOver();
        }
        removeBackgroundByID(currentDisplayAlphabet);
    }
    continueGame();
}

// Add Event Listener For Keyup
document.addEventListener('keyup', handleKeyupEvent);

// Continue Game Function
function continueGame() {
    const getRandomAlphabet = getARandomAlphabet();
    const getDisplayAlphabet = document.getElementById('current-alphabet');
    getDisplayAlphabet.innerText = getRandomAlphabet;

    // Set Background Color
    setBackgroundByID(getRandomAlphabet);
}

// Get Random a Number
function getARandomAlphabet() {
    const getCurrentAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const splitAlphatet = getCurrentAlphabet.split('');
    const getARandomNumber = Math.random(splitAlphatet) * 25;
    const currnetAlphabetIndex = Math.round(getARandomNumber);
    const currentAlphabet = getCurrentAlphabet[currnetAlphabetIndex];
    return currentAlphabet;
}

// Game Over Function
function gameOver() {
    hideSectionbyID('home-screen');
    hideSectionbyID('play-ground');
    showSectionbyID('final-score');

    // Set Score
    const currentScore = document.getElementById('current-score').innerText;
    document.getElementById('last-score').innerText = currentScore;

    // Get Inner Text
    const currentAlphabetText = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetText.innerText;

    // Remove Background
    removeBackgroundByID(currentAlphabet);
    //console.log(currentAlphabet)
}

// Set Background Color
function setBackgroundByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// Remove Background Color
function removeBackgroundByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// Color Reset Function
const array = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
function resetColor() {
    for (arr in array) {
        const getKeyboardID = array[arr].innerText;
        const getKeboardElementByID = document.getElementById(getKeyboardID);
        const checkClassList = getKeboardElementByID.classList;
        if (checkClassList.contains('bg-orange-400')) {
            checkClassList.remove('bg-orange-400');
        }
    }
}