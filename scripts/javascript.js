const button = document.querySelector(".button")
const text = document.querySelector(".operation")

button.addEventListener("click",updateOperation)

function updateOperation(){

    if(button.textContent === 'Start Machine!'){
        button.textContent = "Stop Machine!"
        text.textContent = 'The machine is operating...'
    }
    else{
        button.textContent = 'Start Machine!'
        text.textContent = 'The machine is idle...'
    }
}
