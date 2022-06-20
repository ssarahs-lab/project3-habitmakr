

export function loginPage() {
    //render the login page
    const page = document.getElementById('page')
    page.innerHTML = ''
    page.innerHTML = `
    <form id="login-form" class="form-control w-50 m-auto">
        <h1>Login</h1>
        <p>Email:</p>
        <input type="text" name="email" class="form-control">
        <p>Password:</p>
        <input type="password" name="password" class="form-control">
        <br>
        <button class="btn">Log In</button>
    </form>
    `
    //access the login form data
    let loginForm = document.getElementById('login-form')
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(loginForm)
        const email = formData.get('email')
        const password = formData.get('password')
        //store as an object to send to backend
        const data = {
            email: email,
            password: password
        }

        //send post request to backend to check if log in details match
        axios.post('/api/session', data)
        .then((response) => {
            console.log(response)
            getUser()
            //RENDER FUNCTION CONTENT HERE INSTEAD OF H1
            page.innerHTML = `<h1>Hello ${data.email} </h1>`
        }).catch((error) => {
            //displays error messages dependant on what is wrong
            console.log(error)
            //removes error message if exists to prevent multiple error messages
            if(document.querySelector('.error-msg')) {
                document.querySelector('.error-msg').remove()
            }
            const errorMsg = document.createElement('p')
            //this is JSON sent from the backend
            errorMsg.textContent = error.response.data.message
            errorMsg.classList.add('error-msg')
            
            //add the error message to the top of the form
            loginForm.prepend(errorMsg)
        })
    })

}

export function signupPage() {
    //render signup form
    const page = document.getElementById('page')
    page.innerHTML = ''
    page.innerHTML = `
    <form id="sign-up-form" class="form-control w-50 m-auto">
        <h1>Sign Up</h1>
        <p>Username:</p>
        <input type="text" name="username" class="form-control">
        <p>Email:</p>
        <input type="text" name="email" class="form-control">
        <p>Create Password:</p>
        <input type="password" name="password" class="form-control">
        <p>Confirm Password:</p>
        <input type="password" name="check-password" class="form-control">
        <br>
        <button class="btn">Sign up</button>
    </form>
    `

    const signUpForm = document.getElementById('sign-up-form')
    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault()
        console.log("click")
        const formData = new FormData(signUpForm) 
        const name = formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')
        const checkPassword = formData.get('check-password')
        console.log(name, email, password, checkPassword)
        const data = {
            username: name,
            email: email,
            password: password,
            checkPassword: checkPassword
        }

        //send post request to backend to add new user
        axios.post('/api/users', data)
            .then((response) => {
                if(response.data.success){
                    //renders login page if user sign up is successful
                    loginPage()
                }
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
                signUpForm.prepend(errorMsg)
            })
    })
}

export function handleLogout() {
    //logs out user
    axios
        .delete('/api/session')
        .then((response) => {
            
            console.log(response)
            const page = document.getElementById('page')
            getUser()
            //RENDER FUNCTION CONTENT HERE INSTEAD OF H1
            page.innerHTML = "<h1>Logged out succesfully</h1>"
        })
}

export function getUser() {
    //Get session data from backend and display username in header
    axios
        .get('/api/session')
        .then((response) => {
            const logoutBtn = document.getElementById('logout-btn')
            const loginBtn = document.getElementById('login-btn')
            const signupBtn = document.getElementById('signup-btn')
            const username = document.getElementById('username')
            const categoriesBtn = document.getElementById('categories-btn')
            const customHabitBtn = document.getElementById('custom-habit-btn')
            if(response.data.sessionName) {
                console.log(response.data.sessionName)
                username.textContent = `Hello ${response.data.sessionName}`
                logoutBtn.style.display = 'block'
                categoriesBtn.style.display = 'block'
                customHabitBtn.style.display = 'block'

                loginBtn.style.display = 'none'
                signupBtn.style.display = 'none'
            } else {
                username.textContent = ''
                categoriesBtn.style.display = 'none'
                customHabitBtn.style.display = 'none'
                logoutBtn.style.display = 'none'
                loginBtn.style.display = 'block'
                signupBtn.style.display = 'block'

            }
        })
}

function toggleUserLoginBtns() {
    //sets the visibility of buttons dependant on if logged in or not
    const loginBtn = document.getElementById('login-btn')
    const signupBtn = document.getElementById('signup-btn')
    loginBtn.classList.toggle("toggle-display")
    signupBtn.classList.toggle("toggle-display")
}

function toggleLogoutBtn() {
    //sets the visibility of buttons dependant on if logged in or not
    const logoutBtn = document.getElementById('logout-btn')
    logoutBtn.classList.toggle("toggle-display")
}