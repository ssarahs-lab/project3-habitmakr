import {loginPage, signupPage} from './login_signup.js'

console.log("header.js is running")



export function renderHeader() {
    let header = document.getElementById("header")
    header.innerHTML = "";
 
    header.innerHTML = 
        `<p> <span id="username"></span></p>
        <button id= "log-in">Log in</button>
        <p> <span id="user"></span></p>
        <button id= "signup">Sign up</button>
        `
    const loginButton = document.getElementById("log-in");
    loginButton.addEventListener('click', loginPage)
    const signupButton = document.getElementById("signup");
    signupButton.addEventListener('click', signupPage)
}