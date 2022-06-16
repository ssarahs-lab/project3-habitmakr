import {loginPage, signupPage, handleLogout} from './login_signup.js'
import{renderCategoriesList} from './renderCategoriesList.js'
console.log("header.js is running")



export function renderHeader() {
    let header = document.getElementById("header")
    header.innerHTML = "";

    header.innerHTML = 
        `<p> <span id="username"></span></p>
        <button id= "login-btn">Log in</button>
        <button id="logout-btn" style="display: none;">Log out</button>
        <button id= "signup-btn">Sign up</button>
        <button id= "categories-btn" >Add a habit</button>
        `
    const loginButton = document.getElementById("login-btn");
    loginButton.addEventListener('click', loginPage)
    const signupButton = document.getElementById("signup-btn");
    signupButton.addEventListener('click', signupPage)
    const logoutButton = document.getElementById("logout-btn");
    logoutButton.addEventListener('click', handleLogout)
    const categoriesButton = document.getElementById("categories-btn");
    categoriesButton.addEventListener('click', renderCategoriesList)
    
}
