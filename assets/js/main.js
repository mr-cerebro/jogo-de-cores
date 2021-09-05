var numSquares = 6
var colors = []
var pickedColor

var squares = document.querySelectorAll('.square')
var colorDisplay = document.getElementById('color-display')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetButton = document.getElementById('reset')
var modeButtnons = document.querySelectorAll('.mode')
var easyButton = document.querySelector('.mode')

init()

function init() {
    colorDisplay.textContent  = pickedColor
    setupSquares()
    setupMode()
    reset()
}

resetButton.addEventListener("click", function() {
    reset()
})

function setupSquares() {
    for(let cont = 0; i < squares.length; cont++) {
        squares[cont].style.backgroundColor = colors[cont]
        squaresre[cont].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct"
                resetButton.textContent = "Play Again"
            }
            else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function setupMode() {
    for (let cont = 0 ; cont < modeButtnons.length; cont++) {
        modeButtnons[cont].addEventListener("click", function() {
            for(let cont = 0; cont < modeButtnons.length; cont++) {
                modeButtnons[cont].classList.remove("selected")
            }
            this.classList.add("selected")
            if(this.textContent === "Easy") {
                numSquares = 3
            }
            else {
                numSquares = 6
            }
            reset()
        })
    }
}

function reset() {
    colors = genRandomColors(numSquares)
    pickedColor = chooseColor()
    colorDisplay.textContent = pickedColor()
    h1.style.backgroundColor = "#232323"
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = ""
    for (let cont = 0; cont < squares.length ; cont++) {
        if(colors[cont]) {
            squares[cont].style.display = "block"
            squares[cont].style.backgroundColor = colors[cont]
        }
    }
}