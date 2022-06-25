export const quotes = [
    "Where big things come from small beginnings",
    "You get what you repeat",
    "Every action you take is a vote for the type of person you wish to become.",
    "Winners and losers have the same goals",
   
    "Habits are mental shortcuts learned from experience",
    'You do not rise to the level of your goals. You fall to the level of your systems.',
'When you fall in love with the process rather than the product, you don’t have to wait to give yourself permission to be happy. You can be satisfied anytime your system is running.',
'Goals are good for setting a direction, but systems are best for making progress.',
'Habits are the compound interest of self-improvement.',
'The seed of every habit is a single, tiny decision. But as that decision is repeated, a habit sprouts and grows stronger. Roots entrench themselves and branches grow. ',
'The task of breaking a bad habit is like uprooting a powerful oak within us. \n And the task of building a good habit is like cultivating a delicate flower one day at a time.',
'Every action you take is a vote for the type of person you wish to become.',
'Success is the product of daily habits—not once-in-a-lifetime transformations.',
'Professionals stick to the schedule; amateurs let life get in the way.',
'You don’t have to be the victim of your environment. You can also be the architect of it.',
'The ultimate form of intrinsic motivation is when a habit becomes part of your identity. It’s one thing to say I’m the type of person who wants this. It’s something very different to say I’m the type of person who is this.'
    
]

export const gifs = [
    "https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2019/07/29104435/Rebecca-Mock-Animation-gif-Hank-Green_An-Absolutely-Remarkable-Thing-1.gif"
]

// gif author - Rebecca Mock
export function randomQuote(){
    let randomQ = quotes[Math.floor(Math.random()*quotes.length)];
    return randomQ
}

export function randomGif() {
    let randomImg = gifs[Math.floor(Math.random()*gifs.length)]
    return randomImg
}
export function renderLandingPage() {
    const quote = randomQuote()
    const gif = randomGif()
    console.log(quote)

    const usernameContainer = document.getElementById('usernameContainer')
    usernameContainer.innerHTML = " "
   usernameContainer.classList.add("animate__animated");
           usernameContainer.classList.add("animate__fadeIn")


    const page = document.getElementById('page')
    
    page.innerHTML = ""
    // stuff for the quotes
    page.classList.add("animate__animated");
            page.classList.add("animate__fadeIn")

    
  
    const quoteCredit = document.createElement('h5')
    quoteCredit.textContent = 'James Clear'
    const quoteAndGifDiv = document.createElement('div');
    quoteAndGifDiv.classList.add('div-for-quote');
    const habitQuote = document.createElement('h3');
    
    habitQuote.innerHTML=`<i class="fas fa-quote-left"></i> ${quote} <i class="fa-solid fa-quote-right"></i>`
    
    quoteAndGifDiv.appendChild(habitQuote) // need to make sure that the div has more styling if needed
    quoteAndGifDiv.appendChild(quoteCredit)
    // stuff for the gifs
    const gifDiv = document.createElement('div')
    gifDiv.classList.add('div-for-gif')
    gifDiv.innerHTML = `<img src="${gif}" width=100%>`
   


    page.appendChild(gifDiv)
    page.appendChild(quoteAndGifDiv)
    
}