export function renderAddHabitForm() {

    const page = document.getElementById('page')
    page.innerHTML = ""

    const form = document.createElement("form");
    form.innerHTML = `
    <form id="add-habit-form">
            <h2>Add a custom habit</h2>

            <fieldset>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">Habit name</span>
  </div>
  <input type="text" class="form-control" name="habitName">
</div>
</fieldset>

            <section id="errors"></section>
           
               
            <fieldset>
     
                <div class="input-group">
                <select class="custom-select" id="inputGroupSelect04 frequencyOfReminder" name="frequencyOfReminder">
                    <option selected>How often would you like this habit to occur?</option>
                    <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Fortnightly">Fortnightly</option>
                                <option value="Monthly">Monthly</option>
                </select>
                
                    
                </div>

            </fieldset>
            <fieldset>
            <div class="input-group">
            <button class="btn" style="margin-top:15px">Add Custom Habit</button>
            </div>
            </fieldset>
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


