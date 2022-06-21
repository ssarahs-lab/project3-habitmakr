export function renderAddHabitForm() {

    const page = document.getElementById('page')
    page.innerHTML = ""

    const form = document.createElement("form");
    form.innerHTML = `
    <form id="add-habit-form">
            <h2>Add a custom habit</h2>
            <section id="errors"></section>
            <fieldset>
                <label for="habitName">Habit name</label><br>
                <input type="text" name="habitName">
            </fieldset>
            <fieldset>
                <label for="frequencyOfReminder">Frequency of reminder</label><br>
                <select id="frequencyOfReminder" name="frequencyOfReminder">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="Fortnightly">Fortnightly</option>
                <option value="monthly">Monthly</option>
                
                </select>
            </fieldset> <br>
        
            <button class="btn">Add Custom Habit</button>
        </form>

    `

    page.appendChild(form)

    form.addEventListener('submit', (event) =>{

        event.preventDefault()

        let formData = new FormData(form)

        let data = {

                habitname: formData.get('habitName'),
                reminderfrequency: formData.get('frequencyOfReminder')
        }
        
        axios.post('/api/addcustomhabit', data)
        .then((response) =>{
            console.log(response)
            window.location = '/'
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
                form.prepend(errorMsg)
        })
    })

}


