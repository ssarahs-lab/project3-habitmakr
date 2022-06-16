export function loginPage() {
    //render the login page
    const page = document.getElementById('page')
    page.innerHTML = ''
    page.innerHTML = `
    <form id="login-form">
        <h1>Login</h1>
        <p>Email:</p>
        <input type="text" name="email">
        <p>Password:</p>
        <input type="password" name="password">
        <br>
        <button>Log In</button>
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
            toggleUserLoginBtns()
            //RENDER FUNCTION CONTENT HERE INSTEAD OF H1
            page.innerHTML = `<h1>Login successful</h1>`
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
    <form id="sign-up-form">
        <h1>Sign Up</h1>
        <p>Username:</p>
        <input type="text" name="username">
        <p>Email:</p>
        <input type="text" name="email">
        <p>Password:</p>
        <input type="password" name="password">
        <p>Check Password</p>
        <input type="password" name="check-password">
        <br>
        <button>Log In</button>
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
            toggleUserLoginBtns()
            toggleLogoutBtn()
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
            const username = document.getElementById('username')
            const categoriesBtn = document.getElementById('categories-btn')
            if(response.data.sessionName) {
                console.log(response.data.sessionName)
                username.textContent = `Hello ${response.data.sessionName}`
                logoutBtn.style.display = 'block'
                categoriesBtn.style.display = 'block'

            } else {
                username.textContent = ''
                logoutBtn.style.display = 'none'
                categoriesBtn.style.display = 'none'

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