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
}

export function signupPage() {
    const page = document.getElementById('page')
    page.innerHTML = ''
    page.innerHTML = `
    <form id="sign-up-form">
        <h1>Sign Up</h1>
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
}