import {loginPage, signupPage, handleLogout, getUser} from './login_signup.js'
import{renderCategoriesList} from './renderCategoriesList.js'
import{renderAddHabitForm} from './addHabit.js'

import { renderLandingPage } from './renderLandingPage.js'


import { renderCalender } from './testCalender.js'

import{renderHabitDashboard} from './renderHabitDashboard.js'

import {renderJournal} from './renderJournal.js'


console.log("header.js is running")



export function renderHeader() {
    let header = document.getElementById("header")
    header.innerHTML = "";

    header.classList.add("animate__animated");
           header.classList.add("animate__fadeIn")

    header.innerHTML = `
        <img id="habitMakrLogo" src="https://i.imgur.com/EjgNg8N.png"  onclick="renderLandingPage()" />
        <p> <span id="username"></span></p>
        <div class="collapse navbar-collapse justify-content-end" id="nav-buttons">
        <button id="calender-btn" class="navbar-btn btn nav-btn"><i class=\'far fa-calendar-alt\'></i></button>
        <button id= "login-btn" class="navbar-btn btn nav-btn">Log in</button>
       
        <button id= "signup-btn" class="navbar-btn btn nav-btn">Sign up</button>



        <button id= "habit-dashboard-btn" class="navbar-btn btn nav-btn">Habits' Dashboard</button>
        <button id= "categories-btn" class="navbar-btn btn nav-btn">Choose a premade habit</button>

        
  
        <button id= "journal-entry-btn" class="navbar-btn btn nav-btn">Journal</button>
        <button id="logout-btn" class="navbar-btn btn nav-btn">Log out</button>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-buttons" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-center align-item" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg></span>
        </button>


        `
    const loginButton = document.getElementById("login-btn");
    loginButton.addEventListener('click', loginPage)

    const habitMakrLogo = document.getElementById("habitMakrLogo");
    habitMakrLogo.addEventListener('click', renderLandingPage)

    const signupButton = document.getElementById("signup-btn");
    signupButton.addEventListener('click', signupPage)

    const logoutButton = document.getElementById("logout-btn");
    logoutButton.addEventListener('click', handleLogout)

    const categoriesButton = document.getElementById("categories-btn");
    categoriesButton.addEventListener('click', renderCategoriesList);
    
    const habitDashboardButton = document.getElementById("habit-dashboard-btn");
    habitDashboardButton.addEventListener('click', renderHabitDashboard)

    const journalEntryButton = document.getElementById("journal-entry-btn");
    journalEntryButton.addEventListener('click', renderJournal);

    const calenderBtn = document.getElementById('calender-btn')
    calenderBtn.addEventListener('click', renderCalender)


    getUser()
    
}
