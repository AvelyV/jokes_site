const dad = document.querySelector("#dadjokes")
const box = document.querySelector("#jokebox")
const jumbotron = document.querySelector(".jumbotron")
const modebtn = document.querySelector("#mode")
const body = document.querySelector("body")
console.log(jumbotron)

function popJoke(event) {
    $.getJSON("https://icanhazdadjoke.com", data => {
        let joke = data.joke
        box.textContent = `${joke}`
    })

}

function modeSwap(event) {

    event.preventDefault()
    if (jumbotron.classList.contains("dark")) {
        jumbotron.classList.remove("dark")
        body.classList.remove("dark")
        modebtn.innerText = "Dark Mode"
    } else {
        console.log(jumbotron)
        jumbotron.classList.add("dark")
        body.classList.add("dark")
        modebtn.innerText = "Light Mode"
    }
}



dad.addEventListener("click", popJoke)
modebtn.addEventListener("click", modeSwap)