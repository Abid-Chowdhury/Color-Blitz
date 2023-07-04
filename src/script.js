// CONST
const redSlider = document.getElementById('redInput')
const redValueDisplay = document.getElementById('red-guess')
const greenSlider = document.getElementById('greenInput')
const greenValueDisplay = document.getElementById('green-guess')
const blueSlider = document.getElementById('blueInput')
const blueValueDisplay = document.getElementById('blue-guess')

// VAR
var redGuess = 0
var greenGuess = 0
var blueGuess = 0
var random_RGB = 0

// UPDATE COLOR INPUT VALUE
function updateRedGuessValue() {
    const value = redSlider.value
    redGuess = value
    updateGuessColor()
    redValueDisplay.innerHTML = value
    console.log('test')
}

redSlider.addEventListener("input", () => {
    updateRedGuessValue()
})

function updateGreenGuessValue() {
    const value = greenSlider.value
    greenGuess = value
    updateGuessColor()
    greenValueDisplay.innerHTML = value
}

greenSlider.addEventListener("input", () => {
    updateGreenGuessValue()
})

function updateBlueGuessValue() {
    const value = blueSlider.value
    blueGuess = value
    updateGuessColor()
    blueValueDisplay.innerHTML = value
}

blueSlider.addEventListener("input", () => {
    updateBlueGuessValue()
})

// UPDATED GUESS COLOR CONTAINER
function updateGuessColor() {
    const guess_RGB = `rgb(${redGuess}, ${greenGuess}, ${blueGuess})`
    const guessColorContainer = document.getElementById('guess-color-container')
    guessColorContainer.style.backgroundColor = guess_RGB
}

// SET RANDOM COLOR
function setRandomColor() {
    const random_R = Math.floor(Math.random() * 256)
    const random_G = Math.floor(Math.random() * 256)
    const random_B = Math.floor(Math.random() * 256)
    random_RGB = `rgb(${random_R}, ${random_G}, ${random_B})`
    
    const randomColorContainer = document.getElementById('random-color-container')
    randomColorContainer.style.backgroundColor = random_RGB
}

setRandomColor()

// UPDATE SCORE
function updateScore(score) {
    var score1 = document.getElementById('score1')
    var score2 = document.getElementById('score2')
    var score3 = document.getElementById('score3')
    var score4 = document.getElementById('score4')
    var score5 = document.getElementById('score5')
    
    // convert string to int
    var scoreArray = score1.innerHTML + score2.innerHTML + score3.innerHTML + score4.innerHTML + score5.innerHTML
    var currScore = parseInt(scoreArray)

    var newScore = currScore + score
    
    var newScoreLong = newScore.toString().padStart(5, '0')
    score1.innerHTML = newScoreLong[0]
    score2.innerHTML = newScoreLong[1]
    score3.innerHTML = newScoreLong[2]
    score4.innerHTML = newScoreLong[3]
    score5.innerHTML = newScoreLong[4]
}

// RESET COLOR SELECTORS
function resetColorSelectors() {
    // Update guess slider value
    redSlider.value = 0
    greenSlider.value = 0
    blueSlider.value = 0
    
    // Update guess display value
    updateRedGuessValue()
    updateGreenGuessValue()
    updateBlueGuessValue()
}

// UPDATE ACCURACY
function updateAccuracyDisplay(score) {
    const accuracyDisplay = document.getElementById('accuracy-int')
    accuracyDisplay.innerHTML = score
}

// CHECK SCORE
function secondCheck(rounded_similarity) {
    var score = 0
    if (rounded_similarity < 50) {
        score = 0
    } else {
        score = (rounded_similarity - 50) * 2
    }

    updateAccuracyDisplay(score)
    updateScore(score)
    resetColorSelectors()
    setRandomColor()
    return score
}

function checkScore(random_RGB, guess_RGB) {
    // conver random and guess rgb to lists
    random_RGB = random_RGB.replace(/[rgb() ]/g, "")
    random_RGB = random_RGB.split(",")
    const ran_r = random_RGB[0]
    const ran_g = random_RGB[1]
    const ran_b = random_RGB[2]
    
    guess_RGB = guess_RGB.replace(/[rgb() ]/g, "")
    guess_RGB = guess_RGB.split(",")
    const gue_r = guess_RGB[0]
    const gue_g = guess_RGB[1]
    const gue_b = guess_RGB[2]

    const distance = Math.sqrt(
      Math.pow(gue_r - ran_r, 2) +
      Math.pow(gue_g - ran_g, 2) +
      Math.pow(gue_b - ran_b, 2)
    )

    const maxDistance = Math.sqrt(3 * Math.pow(255, 2));
    const similarity = (1 - (distance / maxDistance)) * 100;

    const rounded_similarity = Math.ceil(similarity)

    return secondCheck(rounded_similarity)
}


// SUBMIT BUTTON
function submitButton() {
    const guess_RGB = `rgb(${redGuess}, ${greenGuess}, ${blueGuess})`
    checkScore(random_RGB, guess_RGB)
}