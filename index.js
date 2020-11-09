const MAX_NUMBER = 100
const MIN_NUMBER = 0

let guess = 

document.getElementById('too-high-btn').addEventListener('click', function () {
    guess/2
    setMessage(`Is it ${guess}?`)
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    (guess*2)*0.75
    setMessage(`Is it ${guess}?`)
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

    guess = 50       /*Math.floor(Math.random()*101)*/

    setMessage(`Is it ${guess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

