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
redSlider.addEventListener("input", () => {
    const value = redSlider.value
    redGuess = value
    updateGuessColor()
    redValueDisplay.innerHTML = value
})

greenSlider.addEventListener("input", () => {
    const value = greenSlider.value
    greenGuess = value
    updateGuessColor()
    greenValueDisplay.innerHTML = value
})

blueSlider.addEventListener("input", () => {
    const value = blueSlider.value
    blueGuess = value
    updateGuessColor()
    blueValueDisplay.innerHTML = value
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
    var score1 = document.getElementById('score1').innerHTML
    var score2 = document.getElementById('score2').innerHTML
    var score3 = document.getElementById('score3').innerHTML
    var score4 = document.getElementById('score4').innerHTML
    var score5 = document.getElementById('score5').innerHTML
    
    // convert string to int
    var scoreArray = score1 + score2 + score3 + score4 + score5
    var currScore = parseInt(scoreArray)

    var newScore = currScore + score
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