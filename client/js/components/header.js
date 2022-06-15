import {loginPage, signupPage, handleLogout} from './login_signup.js'

console.log("header.js is running")



export function renderHeader() {
    let header = document.getElementById("header")
    header.innerHTML = "";

    
//     header.innerHTML = 
//         `<p> <span id="username"></span></p>
//         <button id="log-in-btn">Log in</button>
//         <button id="signup-btn">Sign up</button>
//         <button id="log-out-btn">Log out</button>`
    
//     const loginButton = document.getElementById("log-in-btn");
//     loginButton.addEventListener('click', loginPage)
//     const signupButton = document.getElementById("signup-btn");
//     signupButton.addEventListener('click', signupPage)
//     const logoutButton = document.getElementById("log-out-btn");
//     logoutButton.addEventListener('click', handleLogout)

}


 
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
>>>>>>> origin/main
