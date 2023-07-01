// UPDATE COLOR INPUT VALUE
const redSlider = document.getElementById('redInput')
const redValueDisplay = document.getElementById('red-guess')
const greenSlider = document.getElementById('greenInput')
const greenValueDisplay = document.getElementById('green-guess')
const blueSlider = document.getElementById('blueInput')
const blueValueDisplay = document.getElementById('blue-guess')

var redGuess = 0
var greenGuess = 0
var blueGuess = 0

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
    const random_RGB = `rgb(${random_R}, ${random_G}, ${random_B})`
    
    const randomColorContainer = document.getElementById('random-color-container')
    randomColorContainer.style.backgroundColor = random_RGB
}

setRandomColor()
