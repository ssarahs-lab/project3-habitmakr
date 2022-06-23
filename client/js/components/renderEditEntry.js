import { renderJournal } from "./renderJournal.js"

export function renderEditEntry (id,title,entry) {
    const page = document.getElementById('page')
    const entryForm = document.createElement('form')
    //console.log(title)
    //console.log(entry)
    entryForm.innerHTML = `
    <label for="title"> Title </label> <br>
    <input type="text" name="title" value="${title}"> <br>
    <label for="entry"> Entry </label> <br>
    <textarea type="text" name="entry" rows="10"> ${entry} </textarea> <br>
    <button class="btn"> Save </button> 
    `
    page.replaceChildren(entryForm)

    entryForm.addEventListener('submit', (event) => {
        event.preventDefault()

        console.log('submit clicked')

        let formData = new FormData(entryForm)
        console.log(formData)

        let data = {
            title: formData.get('title'),
            entry: formData.get('entry')
        }
        console.log(data)

        axios.put(`/api/editjournalentry/${id}`, data)
        .then((response)=> {
            console.log(response.data)
            renderJournal()
        })


    }) 


}