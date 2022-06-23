// import { loginPage, signupPage } from './components/login.js'
import { renderHeader } from "./components/header.js";


renderHeader()

// loginPage()
// signupPage()

const quotes = [
    "Where big things come from small beginnings",
    "You get what you repeat",
    "Every action you take is a vote for the type of person you wish to become",
    "Winners and losers have the same goals",
    "Every action you take is a vote for the type of person you wish to become",
    "Habits are mental shortcuts learned from experience"
]

const gifs = [
    "https://i.gifer.com/K6z.gif"
]
function randomQuote(){
    let randomQ = quotes[Math.floor(Math.random()*quotes.length)];
    return randomQ + " ~ James Clear"
}

function randomGif() {
    let randomImg = gifs[Math.floor(Math.random()*gifs.length)]
    return randomImg
}
function renderLangingPage() {
    const quote = randomQuote()
    const gif = randomGif()
    console.log(quote)

    const div1 = document.getElementById('page')

    // stuff for the quotes
    const quoteDiv = document.createElement('div')
    quoteDiv.classList.add('div-for-quote')
    const test = document.createElement('p')
    test.textContent = quote
    quoteDiv.appendChild(test) // need to make sure that the div has more styling if needed

    // stuff for the gifs
    const gifDiv = document.createElement('div')
    gifDiv.classList.add('div-for-gif')
    gifDiv.innerHTML = `<img src="${gif}">`


    div1.appendChild(gifDiv)
    div1.appendChild(quoteDiv)
    
}
renderLangingPage()