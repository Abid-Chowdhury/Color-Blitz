// UPDATE COLOR INPUT VALUE
const redSlider = document.getElementById('redInput')
const redValueDisplay = document.getElementById('red-guess')
const greenSlider = document.getElementById('greenInput')
const greenValueDisplay = document.getElementById('green-guess')
const blueSlider = document.getElementById('blueInput')
const blueValueDisplay = document.getElementById('blue-guess')

redSlider.addEventListener("input", () => {
    const value = redSlider.value
    redValueDisplay.innerHTML = value
})

greenSlider.addEventListener("input", () => {
    const value = greenSlider.value
    greenValueDisplay.innerHTML = value
})

blueSlider.addEventListener("input", () => {
    const value = blueSlider.value
    blueValueDisplay.innerHTML = value
})

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
