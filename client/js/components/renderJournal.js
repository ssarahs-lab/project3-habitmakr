
import { renderAddEntry } from "./renderAddEntry.js"
export function renderJournal() {
    const page = document.getElementById("page")
    const title = document.createElement('h3')
    title.textContent = "Journal"

    const journalSection = document.createElement('div')
    journalSection.classList.add("journal-section")

    const entrybutton = document.createElement('button')
    entrybutton.classList.add("btn")
    entrybutton.textContent = "Add entry"
    entrybutton.addEventListener('click', renderAddEntry)

    journalSection.appendChild(entrybutton)
    page.replaceChildren(title,journalSection)

    axios.get('/api/journalentries').then((response) => {
        console.log(response)
        response.data.map(entry => {
            const {title,journal_entry, date_entered} = entry
            const div1 = document.createElement('div')

            const entry_title = document.createElement('h3')
            entry_title.textContent = title

            const journal_description = document.createElement('p')
            journal_description.textContent = journal_entry

            const entry_date = document.createElement('p')
            entry_date.textContent = date_entered

            div1.appendChild(entry_title)
            div1.appendChild(entry_date)
            div1.appendChild(journal_description)
            page.appendChild(div1)



        })
    })
}



