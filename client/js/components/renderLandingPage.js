export const quotes = [
    "Where big things come from small beginnings",
    "You get what you repeat",
    "Every action you take is a vote for the type of person you wish to become",
    "Winners and losers have the same goals",
    "Every action you take is a vote for the type of person you wish to become",
    "Habits are mental shortcuts learned from experience"
]

export const gifs = [
    "https://i.gifer.com/K6z.gif"
]
export function randomQuote(){
    let randomQ = quotes[Math.floor(Math.random()*quotes.length)];
    return randomQ + " ~ James Clear"
}

export function randomGif() {
    let randomImg = gifs[Math.floor(Math.random()*gifs.length)]
    return randomImg
}
export function renderLandingPage() {
    const quote = randomQuote()
    const gif = randomGif()
    console.log(quote)


    const page = document.getElementById('page')
    
    page.innerHTML = ""
    // stuff for the quotes
    
    
    const quoteAndGifDiv = document.createElement('div');
    quoteAndGifDiv.classList.add('div-for-quote');
    const habitQuote = document.createElement('p');
    habitQuote.textContent = quote
    quoteAndGifDiv.appendChild(habitQuote) // need to make sure that the div has more styling if needed

    // stuff for the gifs
    const gifDiv = document.createElement('div')
    gifDiv.classList.add('div-for-gif')
    gifDiv.innerHTML = `<img src="${gif}">`


    page.appendChild(gifDiv)
    page.appendChild(quoteAndGifDiv)
    
}