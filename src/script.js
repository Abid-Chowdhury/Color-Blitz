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
