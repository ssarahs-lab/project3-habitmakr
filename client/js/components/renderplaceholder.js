export function placeholder() {


const page = document.getElementById('page')
    page.innerHTML = ''
    let calendar = document.getElementById('calendar')
    calendar.innerHTML = ''

    page.innerHTML = `

    <style> 
    
    #page {
        display: grid;
        place-items: center;
    }

    </style>

    <img src="https://i.pinimg.com/originals/dd/26/70/dd26704aa046c2ba2d3feff46139118e.gif">



    `

    // image source: https://mrbuffalo.tumblr.com/
}