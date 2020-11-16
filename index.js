const MAX_NUMBER = 100
const MIN_NUMBER = 0
const maxGuess = 100
const minGuess = 0

let guess = 


document.getElementById('too-high-btn').addEventListener('click', function () {  
    guess = guess - guess/2
    UpdateMessage()
})

document.getElementById('too-low-btn').addEventListener('click', function () { 
    guess = guess + guess/2
    UpdateMessage()
})

document.getElementById("is-correct-btn").addEventListener("click", function(){
    setMessage("woohooo!")
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() { 
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess =  50  /*Math.floor(Math.random()*101)*/

    setMessage(`Is it ${(guess)}?`)
}

function UpdateMessage(){
    setMessage(Math.floor(guess))
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

