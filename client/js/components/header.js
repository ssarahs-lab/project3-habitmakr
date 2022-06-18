import {loginPage, signupPage, handleLogout, getUser} from './login_signup.js'
import{renderCategoriesList} from './renderCategoriesList.js'
import{renderAddHabitForm} from './addHabit.js'
console.log("header.js is running")



export function renderHeader() {
    let header = document.getElementById("header")
    header.innerHTML = "";

    header.innerHTML = 

        `
        <h1 id="title">Habit Makr</h1>
        <p> <span id="username"></span></p>
        <button id= "login-btn" class="btn nav-btn">Log in</button>
        <button id="logout-btn" class="btn nav-btn" style="display: none;">Log out</button>
        <button id= "signup-btn" class="btn nav-btn">Sign up</button>
        <button id= "categories-btn" class="btn nav-btn">Choose habit</button>
        <button id= "custom-habit-btn" class="btn nav-btn">Add habit</button>
        `
    const loginButton = document.getElementById("login-btn");
    loginButton.addEventListener('click', loginPage)
    const signupButton = document.getElementById("signup-btn");
    signupButton.addEventListener('click', signupPage)
    const logoutButton = document.getElementById("logout-btn");
    logoutButton.addEventListener('click', handleLogout)
    const categoriesButton = document.getElementById("categories-btn");
    categoriesButton.addEventListener('click', renderCategoriesList)
    const customHabitButton = document.getElementById("custom-habit-btn")
    customHabitButton.addEventListener('click', renderAddHabitForm)

    getUser()
    
}
