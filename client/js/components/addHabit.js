// user add custom habit

export function renderAddHabitForm() {

    const page = document.getElementById('page')
    page.innerHTML = ""

    const form = document.createElement("form");
    form.innerHTML = `
    <form id="add-habit-form">
            <h2>Add a custom habit</h2>
            <section id="errors"></section>
            <fieldset>
                <label for="habitName">Habit name:</label><br>
                <input type="text" name="habitName">
            </fieldset>
            <fieldset>
                <label for="frequencyOfReminder">Frequency of reminder</label><br>
                <select id="frequencyOfReminder" name="frequencyOfReminder">
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Fortnightly">Fortnightly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Yearly">Yearly</option>
                

                <div class="input-group mb-3">
            <div class="input-group-prepend">


    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="Frequency of Reminder" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>

      </div>
      </div >    
                </select>
            </fieldset>
        
            <button>Add Custom Habit</button>

            
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
        })
    })

}

