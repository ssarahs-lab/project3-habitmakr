
import { renderAddEntry } from "./renderAddEntry.js"
import { renderEditEntry } from "./renderEditEntry.js"
export function renderJournal() {
    const page = document.getElementById("page")
    const title = document.createElement('h1')
    title.textContent = "Journal"
    title.classList.add('title')


    const journalSection = document.createElement('div')
    journalSection.classList.add("journal-section")

    const entrybutton = document.createElement('button')
    entrybutton.classList.add("btn")
    entrybutton.textContent = "Add entry"
    entrybutton.addEventListener('click', renderAddEntry)

    let catImageGif = document.createElement('img')
          
    catImageGif.src = " https://i.gifer.com/ICtO.gif"
    catImageGif.style.width = '300px'
    catImageGif.classList.add('cat-gif')
 


    const overview = document.createElement('div')
    overview.classList.add('entry-container')
    journalSection.appendChild(entrybutton)
    page.replaceChildren(title,catImageGif,journalSection)

    axios.get('/api/journalentries').then((response) => {
       console.log(response)
        response.data.map(entry => {
            const id = entry.id

            const {title,journal_entry, date_entered} = entry
            const div1 = document.createElement('div')
            div1.classList.add('div-for-entries')

            const entry_title = document.createElement('h3')
            entry_title.textContent = title

            const journal_description = document.createElement('p')
            journal_description.textContent = journal_entry

            const formattedDate = moment(date_entered).calendar()
            const entry_date = document.createElement('p')
            entry_date.textContent = formattedDate

            const editButton = document.createElement('button')
            editButton.textContent = "Edit"
            editButton.classList.add('btn')
            editButton.addEventListener('click', (event) => {
                renderEditEntry(id,title,journal_entry)
                console.log(title)
            })

            
            div1.appendChild(entry_title)
            div1.appendChild(entry_date)
            div1.appendChild(journal_description)
            div1.appendChild(editButton)
            
            overview.appendChild(div1)
            page.appendChild(overview)



        })
    })
}



