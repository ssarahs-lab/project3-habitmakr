export function loginPage() {
    const page = document.getElementById('page')
    page.innerHTML = ''
    page.innerHTML = `
    <form id="log-in-form">
        <h1>Login</h1>
        <p>Email:</p>
        <input type="text" name="email">
        <p>Password:</p>
        <input type="password" name="password">
        <br>
        <button>Log In</button>
    </form>
    `
    let form = document.getElementById('log-in-form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const email = formData.get('email')
        const password = formData.get('password')
        const data = {
            email: email,
            password: password
        }
        axios.post('/api/session', data)
        .then((response) => {
            console.log(response)
            getUser()
            page.innerHTML = `<h1>Login successful</h1>`
        })
    })

}

export function signupPage() {
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
        axios.post('/api/users', data)
            .then((response) => {
                if(response.data.success){
                    loginPage()
                }
            }).catch((error) => {
                console.log(error)
                if(document.querySelector('.error-msg')) {
                    document.querySelector('.error-msg').remove()
                }
                const errorMsg = document.createElement('p')
                errorMsg.textContent = error.response.data.message
                errorMsg.classList.add('error-msg')

                signUpForm.prepend(errorMsg)
            })
    })
}

export function handleLogout() {
    axios
        .delete('/api/session')
        .then((response) => {
            //replace with a render function when we add functionality
            console.log(response)
            const page = document.getElementById('page')
            getUser()
            page.innerHTML = "<h1>Logged out succesfully</h1>"
        })
}

export function getUser() {
    axios
        .get('/api/session')
        .then((response) => {
            const username = document.getElementById('username')
            if(response.data.sessionName) {
                console.log(response.data.sessionName)
                username.textContent = `Hello ${response.data.sessionName}`

            } else {
                username.textContent = ''
            }
        })
}