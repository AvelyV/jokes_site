const dad = document.querySelector("#dadjokes")
const box = document.querySelector("#jokebox")

function popJoke(event) {
    $.getJSON("https://icanhazdadjoke.com", data => {
        let joke = data.joke
        box.textContent = `${joke}`
    })
    
    
}

dad.addEventListener("click", popJoke)