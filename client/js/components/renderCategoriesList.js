

export function renderCategoriesList(){

    page.innerHTML = ""
    let calendar = document.getElementById('calendar')
    calendar.innerHTML = ''

    let categoryNames = []
    let categoryImgURL = []
    let categoryContainer = document.createElement('div')
    categoryContainer.classList.add('category-container')
    

    let h2 = document.createElement('h2')
    h2.textContent = "Choose a premade habit"
    h2.classList.add("text-center")

    page.appendChild(h2)

    page.appendChild(categoryContainer)

    axios
    .get("api/categories")
    .then((response) => {

        

        response.data.forEach((category)=> {

            let divCard = document.createElement('div');
            let categoryLink = document.createElement('a');
            let img = document.createElement('img');
            let habitContainer = document.createElement('div')

         
            divCard.classList.add("card")
            divCard.classList.add("divCard")

            divCard.style.backgroundImage = `url('${category.image_related_identity_url}')`


            categoryNames.push(category.identities);
            categoryImgURL.push(category.image_related_identity_url)

            // console.log(categoryNames)
                
            categoryContainer.appendChild(divCard)
        
            categoryLink.setAttribute('href', '#');
            categoryLink.innerHTML = category.identities;

            // img.src = category.image_related_identity_url

            // let habits = 

            // habits.forEach((habit) => {
            //     habit.classList.add(`habit${category.identities_id}`)
            //     habitContainer.appendChild(habit)
            // })
            axios.get(`/api/categories/${category.identities_id}`)
                .then((response) => {
                    response.data.forEach((newHabit) => {
                        let newLi = document.createElement('li')
                        axios.get('/api/userhabits')
                        .then((response) => {
                            let isChecked = false
                            let userHabitId = null
                            response.data.forEach((userHabit)=> {
                                // console.log(userHabit)
                                if(newHabit.habit === userHabit.habit_name) {
                                    isChecked = true
                                    userHabitId = userHabit.user_habits_id
                                }
                                
                            })
                            let checkbox = document.createElement('div')
                                if(isChecked) {
                                    checkbox.innerHTML = `
                                    <input type="checkbox" checked id="${newHabit.habit}">
                                `
                                    checkbox.dataset.habitId = userHabitId
                                } else {
                                    checkbox.innerHTML = `
                                    <input type="checkbox" id="${newHabit.habit}">
                                    `
                                }
                                
                                newLi.classList.add('toggle-display')
                                // newLi.classList.add("list-group-item")
                                newLi.textContent = newHabit.habit
                                habitContainer.append(newLi)
                                newLi.appendChild(checkbox)
                                let habitCheckbox = document.getElementById(newHabit.habit)
                                habitCheckbox.addEventListener('change', function() {
                                    if(habitCheckbox.checked) {
                                        console.log('click')
                                        axios.post('/api/addcustomhabit', {
                                             habitname: newHabit.habit,
                                             reminderfrequency: "Daily",
                                             habits_list_id: newHabit.habits_list_id
        
                                            }).then((response) => {
                                                checkbox.dataset.habitId = response.data.habitId
                                            })
                                    } else {
                                        console.log(checkbox.dataset.habitId)
                                        axios.delete(`/api/deleteHabit/${checkbox.dataset.habitId}`)
                                        .then(response => console.log(response))
                                    }
                                })
                        })
                        
                    })
                })


          
            divCard.appendChild(categoryLink)

            divCard.appendChild(habitContainer)

            categoryLink.addEventListener('click', function(e) {
                e.preventDefault()
                
                let newLi = habitContainer.querySelectorAll('li')
                divCard.classList.toggle('toggle-background')
                newLi.forEach((li) => li.classList.toggle('toggle-display'))
            })


        })

    })

}

// function getHabits(id) {
//     console.log(`/api/categories/${id}`)
//     axios.get(`/api/categories/${id}`)
//     .then((response) => {
//         console.log(response)
//     })
    
// }

