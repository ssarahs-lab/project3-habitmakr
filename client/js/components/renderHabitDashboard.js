import {renderCalender} from './testCalender.js'
import { renderAddHabitForm } from './addHabit.js'

export function renderHabitDashboard(){

    page.innerHTML = ""

    // calendar button 
    let currentHabitsContainer = document.createElement('div');
    let addCustomHabitContainer = document.createElement('div');
    let addCustomHabitBtn = document.createElement('button')
    


    // current habits display
   
  
    currentHabitsContainer.classList.add("currentHabitsContainer");
   
    page.appendChild(currentHabitsContainer)

    const masterListHeading = document.createElement("h3");
    masterListHeading.textContent = "Current Habits"
    currentHabitsContainer.appendChild(masterListHeading)

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
            completedBtn.innerHTML = '<i class="fas fa-check"></i>'
                          
            currentHabitsContainer.appendChild(tableRow);
            habitNameCell.textContent = userhabit.habit_name;
            habitNameCell.classList.add("habitNameCell");
            reminderFrequencyCell.textContent = userhabit.user_determined_frequency_of_reminder;
            reminderFrequencyCell.classList.add("reminderFrequencyCell");
            tableRow.appendChild(habitNameCell);
            tableRow.appendChild(reminderFrequencyCell);
            tableRow.appendChild(completedCell);
            completedCell.appendChild(completedBtn);
            completedCell.classList.add("completedCell")

            completedBtn.addEventListener('click', function(){
                console.log('click')
                completedBtn.disabled = true
                completedBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
                let data = {
                    habit: userhabit.habit_name
                }
                

                axios.post('api/completedHabit', data)
                .then((response) => {
                
                })
            })

            axios.get('api/completedHabit')
            .then((response) => {
                //gets todays date
                let today = moment(new Date()).format()
                let todayDate = today.split("T")
                


                response.data.forEach((completedHabit) => {
                    //converts the backend timestamp to the users correct timezone
                    let completedDate = (moment(new Date(completedHabit.time_completed)).format()).split('T')
                    //checks to see if todays date is the same as the day the habit was completed
                    //if there is a match, the button with be disabled until the following day
                    

                    if(completedHabit.habit_name == userhabit.habit_name && completedDate[0] == todayDate[0]) {
                        completedBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
                        completedBtn.disabled = true

                    }
                })
            })
        
        }

        )}

    )

    

    page.appendChild(addCustomHabitContainer)
    

   
    addCustomHabitBtn.innerHTML = '<i class="fas fa-plus"></i>'
    addCustomHabitBtn.classList.add('btn')
    addCustomHabitBtn.addEventListener('click', renderAddHabitForm)

    //add custom habit button
  
    addCustomHabitContainer.setAttribute('id','addCustomHabitContainer')
    

    currentHabitsContainer.appendChild(addCustomHabitBtn)
    
    
    
    }


