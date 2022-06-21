export function renderHabitDashboard(){

    page.innerHTML = ""

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

            console.log(userhabit)
        
           
            let habitDashboardDiv = document.createElement('div');
            habitDashboardDiv.classList.add("habitDashboardDiv")

            let tableRow = document.createElement('tr');
            let habitNameCell = document.createElement('td');
            let reminderFrequencyCell = document.createElement('td');

                 
            habitDashboardContainer.appendChild(tableRow);
            habitNameCell.textContent = userhabit.habit_name;
            habitNameCell.setAttribute = ('width', '70px' )
            reminderFrequencyCell.textContent = userhabit.user_determined_frequency_of_reminder;
            tableRow.appendChild(habitNameCell);
            tableRow.appendChild(reminderFrequencyCell);

      
        
        
        
        }

            

            // userhabit.habit_name
            //userhabit.user_determined_frequency_of_reminder

        )}

    )

    }