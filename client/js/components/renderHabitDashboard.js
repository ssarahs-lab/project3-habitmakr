export function renderHabitDashboard(){

    page.innerHTML = ""

    let habitDashboardContainer = document.createElement('div')
    habitDashboardContainer.classList.add("habitDashboardContainer")
   
    page.appendChild(habitDashboardContainer);

    axios
    .get("api/userhabits")
    .then((response) => {

        

        response.data.forEach((userhabit)=> {

            console.log(userhabit)
        
            let habitDashboardDiv = document.createElement('div');
            habitDashboardDiv.classList.add("habitDashboardDiv")
            let habitNameParagraph = document.createElement('p');
            let reminderfrequency = document.createElement('p');


            habitNameParagraph.textContent = userhabit.habit_name;
            reminderfrequency.textContent = userhabit.user_determined_frequency_of_reminder;

            habitDashboardContainer.appendChild(habitDashboardDiv);
            habitDashboardDiv.appendChild(habitNameParagraph);
            habitDashboardDiv.appendChild(reminderfrequency)
        
        
        
        
        }

            

            // userhabit.habit_name
            //userhabit.user_determined_frequency_of_reminder

        )}

    )

    }