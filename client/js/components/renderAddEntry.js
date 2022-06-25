
export function renderAddEntry() {
    console.log('renderAddEntry')
    const page = document.getElementById("page")

    const journalForm = document.createElement('form')
    journalForm.innerHTML = `
    <label for="title" class="animate__animated animate__fadeIn"> Title </label> <br>
    <input type="text" name="title" class="animate__animated animate__fadeIn"> <br>
    <label for="entry" class="animate__animated animate__fadeIn"> Entry </label> <br>
    <textarea type="text" name="entry" rows="10"class="animate__animated animate__fadeIn"></textarea> <br>
    <button class="btn" class="animate__animated animate__fadeIn"> Enter </button> 
    `
    page.replaceChildren(journalForm)

    journalForm.addEventListener('submit', (event) => {
        event.preventDefault()

        console.log('submit clicked')

        let formData = new FormData(journalForm)
        console.log(formData)

        let data = {
            title: formData.get('title'),
            entry: formData.get('entry')
        }
        console.log(data)

        axios.post('/api/addjournalentry', data)
        .then((response)=> {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
            //removes error message if exists to prevent multiple error messages
            if(document.querySelector('.error-msg')) {
                document.querySelector('.error-msg').remove()
            }
            const errorMsg = document.createElement('p')
            //JSON sent from the backend, changes dynamically dependant on what is missing
            errorMsg.textContent = error.response.data.message
            errorMsg.classList.add('error-msg')                
            //add error message to top of form
            journalForm.prepend(errorMsg)
        })
    }) 
}