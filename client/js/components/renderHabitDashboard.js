import {renderCalender} from './testCalender.js'

export function renderHabitDashboard(){

    page.innerHTML = ""
    let calenderBtn = document.createElement('button')
    calenderBtn.textContent = "Calender"
    calenderBtn.classList.add('btn')
    calenderBtn.addEventListener('click', function() {
        let calendar = document.getElementById('calendar')
        calendar.innerHTML = ''
        renderCalender()
    })
    page.appendChild(calenderBtn)

    let habitDashboardContainer = document.createElement('div')
    habitDashboardContainer.classList.add("habitDashboardContainer")
   
    page.appendChild(habitDashboardContainer)

    const masterListHeading = document.createElement("h3");
    masterListHeading.textContent = "Current Habits"
    habitDashboardContainer.appendChild(masterListHeading)

    // let catImageGif = document.createElement('img')
          
    // catImageGif.src = "https://i.gifer.com/4g8n.gif"
    // catImageGif.style.width = '30vw'
    // habitDashboardContainer.appendChild(catImageGif)  
    
    // https://i.gifer.com/ICtO.gif

    axios
    .get("api/userhabits")
    .then((response) => {

        

        response.data.forEach((userhabit)=> {

        
           
            let habitDashboardDiv = document.createElement('div');
            habitDashboardDiv.classList.add("habitDashboardDiv")

            let tableRow = document.createElement('tr');
            let habitNameCell = document.createElement('td');
            let reminderFrequencyCell = document.createElement('td');
            let completedCell = document.createElement('td')
            let completedBtn = document.createElement('button')
            completedBtn.classList.add('btn')
            completedBtn.textContent = 'Complete'

                 
            habitDashboardContainer.appendChild(tableRow);
            habitNameCell.textContent = userhabit.habit_name;
            habitNameCell.setAttribute = ('width', '70px' )
            reminderFrequencyCell.textContent = userhabit.user_determined_frequency_of_reminder;
            tableRow.appendChild(habitNameCell);
            tableRow.appendChild(reminderFrequencyCell);
            tableRow.appendChild(completedCell)
            completedCell.appendChild(completedBtn)

            completedBtn.addEventListener('click', function(){
                console.log('click')
                completedBtn.disabled = true
                completedBtn.textContent = 'Well done... See you tomorrow!'
                let data = {
                    habit: userhabit.habit_name
                }
                

                axios.post('api/completedHabit', data)
                .then((response) => {
                    
                    renderCalender()
                })
            })

            

            axios.get('api/completedHabit')
            .then((response) => {
                //gets todays date
                let today = moment(new Date()).format()
                let todayDate = today.split("T")


                response.data.forEach((completedHabit) => {
                    let completedDate = completedHabit.time_completed.split('T')
                    //checks to see if todays date is the same as the day the habit was completed
                    //if there is a match, the button with be disabled until the following day

                    if(completedHabit.habit_name == userhabit.habit_name && completedDate[0] == todayDate[0]) {
                        completedBtn.textContent = 'Well done... See you tomorrow!'
                        completedBtn.disabled = true

                    }
                })
            })

      
        
        
        
        }

            

            // userhabit.habit_name
            //userhabit.user_determined_frequency_of_reminder

        )}

    )

    }