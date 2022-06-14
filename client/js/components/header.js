import {loginPage, signupPage} from './login_signup.js'

console.log("header.js is running")



export function renderHeader() {
    let header = document.getElementById("header")
    header.innerHTML = "";
 
    const log = document.getElementById("page")
    log.className = "login";
    header.appendChild(log)
    log.innerHTML = 
        `<p> <span id="username"></span></p>
        <button id= "log-in">Log in</button>`
    
    const loginButton = document.getElementById("log-in");
    loginButton.addEventListener('click', loginPage)
}