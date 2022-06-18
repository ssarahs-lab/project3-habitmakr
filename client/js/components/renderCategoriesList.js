

export function renderCategoriesList(){

    page.innerHTML = ""

    let categoryNames = []
    let categoryImgURL = []
    let categoryContainer = document.createElement('div')
    categoryContainer.classList.add('category-container')
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
                        let checkbox = document.createElement('div')
                        checkbox.innerHTML = `
                            <input type="checkbox" id="${category.identities_id}">
                        `
                        newLi.classList.add('toggle-display')
                        // newLi.classList.add("list-group-item")
                        newLi.textContent = newHabit.habit
                        habitContainer.append(newLi)
                        newLi.appendChild(checkbox)
                    })
                })


            divCard.appendChild(img)
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