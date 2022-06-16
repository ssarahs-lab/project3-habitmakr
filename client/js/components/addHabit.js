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
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="Fortnightly">Fortnightly</option>
                <option value="monthly">Montlhy</option>
                
                </select>
            </fieldset>
            <fieldset>
                
                <label for="habit-category">What category would you say this habit falls under? </label><br>
                <input type="text" name="habit-category">
            </fieldset>
            <button>Add Custom Habit</button>
        </form>

    `

    page.appendChild(form)

    form.addEventListener('submit', (event) =>{

        event.preventDefault()

        let formData = new FormData(form)

        let data = {

                identity: formData.get('habitCategory')
        }

        axios.post('/api/addcustomhabit', data)
        .then((response) =>{
            console.log(response)
            window.location = '/'
        })
    })

}


