const button = document.querySelector("button");

button.addEventListener("click",updateMessage)

function updateMessage(){
    const message = prompt("Message before detonation: ");
    button.textContent =  message;
}
