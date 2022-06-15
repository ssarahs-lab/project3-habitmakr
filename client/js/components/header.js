import {loginPage, signupPage, handleLogout} from './login_signup.js'

console.log("header.js is running")



export function renderHeader() {
    let header = document.getElementById("header")
    header.innerHTML = "";

    header.innerHTML = 
        `<p> <span id="username"></span></p>
        <button id= "login-btn">Log in</button>
        <button id="logout-btn" style="display: none;">Log out</button>
        <button id= "signup-btn">Sign up</button>
        `
    const loginButton = document.getElementById("login-btn");
    loginButton.addEventListener('click', loginPage)
    const signupButton = document.getElementById("signup-btn");
    signupButton.addEventListener('click', signupPage)
    const logoutButton = document.getElementById("logout-btn");
    logoutButton.addEventListener('click', handleLogout)
}
