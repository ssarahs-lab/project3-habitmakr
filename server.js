const express = require('express')
const db = require('./db/db.js')
//access secret key for setting session
require('dotenv').config()

const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);

//import routes
const sessionController = require('./controllers/session')
const usersController = require('./controllers/users')



const app = express()

const pg = require("pg");
const { response } = require('express');
const port = process.env.PORT || 3000;



//set session
app.use(expressSession({
  store: new pgSession({
      pool: db,
      createTableIfMissing: true,
  }),
  secret: process.env.EXPRESS_SESSION_SECRET_KEY,    
}))

app.use(express.json())
app.use(express.static('client'))
app.use('/js/tui-calendar', express.static(__dirname + '/node_modules/tui-calendar/dist'))

//access the routes
app.use('/api/session', sessionController)
app.use('/api/users', usersController)


app.get('/api/categories', (request, response) => {
  

  const sql = "SELECT * FROM identities;"
  db.query(sql)
  .then((dbResult) => {
    response.json(dbResult.rows)
  })
})

app.get('/api/categories/:id', (request, response) => {
    let id = request.params.id
    const sql = "SELECT * FROM habits_list WHERE identities_id = $1"
    db.query(sql, [id])
    .then((dbResult) => {
      response.json(dbResult.rows)
    })
})


// add a custom habit
app.post('/api/addcustomhabit', (request, response)=>{
  
  if(!request.session.loggedIn) {
    response.status(401)
    response.json({success: false, message: "Must be logged in to add a habit."})
    return
  } else {
    const sqlforUserHabitsTable = 'INSERT INTO user_habits(habit_name, user_determined_frequency_of_reminder, user_id) VALUES ($1, $2, $3) RETURNING *;'

    console.log(request.body)
    console.log(request.session.userId)
      
  
    db.query(sqlforUserHabitsTable, [request.body.habitname, request.body.reminderfrequency, request.session.userId])
    .then(dbResult => {
      console.log(dbResult)
      response.json({success: true, habitId: dbResult.rows[0].user_habits_id})
    })
  }
  
})

app.delete('/api/deleteHabit/:id', (request, response) => {
  let sql = `DELETE FROM user_habits WHERE user_habits_id = $1 AND user_id = $2`
  console.log(request.params.id)
  let userId = request.session.userId
  db.query(sql, [request.params.id, userId])
  .then((dbResult) => {
    response.json({
      success: true,
      message: "successfully deleted"
    })
  }).catch((error) => {
    response.status(400)
    response.json({
      success: false,
      message: "could not delete"
    })
  }) 
})

// get all journal entries
app.get('/api/journalentries', (req,res) => {
  console.log(req.session)
  const {userId} = req.session
  const sql = 'SELECT * FROM journal_entries WHERE user_entry_id = ($1);'
 
  db.query(sql, [userId]).then(dbResult => {
    res.json(dbResult.rows)
  })
})

//display users habits
app.get('/api/userhabits', (request, response)=> {

  let userid = request.session.userId

  const sql = "SELECT * FROM user_habits WHERE user_id = $1"

  db.query(sql, [userid])
  .then((dbResult)=>{

      response.json(dbResult.rows)

  } )

    

})


// add a journal entry
app.post('/api/addjournalentry', (req, res) => {
  console.log(req.body)
  console.log(req.session)
  const {title, entry} = req.body
  const {userId} = req.session
  console.log(userId)
  if(!req.session.loggedIn){
    res.status(401)
    res.json({success: false, message: "Must be logged in to add an entry"})
  } else {
    const sql = 'INSERT INTO journal_entries(user_entry_id, title, journal_entry) VALUES ($1, $2, $3);' 

    db.query(sql, [userId, title, entry]).then(dbResult => {
      res.json({success: true})
    })
  }

  
  console.log("/api/addjournalentry")
})

app.get('/api/userHabits', (req, res) => {
  let userId = req.session.userId

  let sql = `SELECT user_habits_id, habit_name, date_started, user_determined_frequency_of_reminder FROM user_habits WHERE user_id = $1`

  db.query(sql, [userId])
  .then((dbResponse) => {
    console.log(dbResponse.rows, "Hello")
    res.json(dbResponse.rows)
  })
})

//add to completed habits log
app.post('/api/completedHabit', (req, res) => {
  let userId = req.session.userId

  let habit = req.body.habit

  let sql = `INSERT INTO user_habit_log(user_id, habit_name) VALUES ($1, $2)`

  db.query(sql, [userId, habit])
  .then((dbResponse) => {
    console.log(dbResponse.rows)
    res.json({success: true})
  }).catch((error) => {
    res.status(400)
    res.json({
      success: false,
      error: error
    })
  })
})


//gets the completed habits by user from user_habits_log
app.get('/api/completedHabit', (req, res) => {
  let userId = req.session.userId 

  let sql = `SELECT user_habit_log_id, habit_name, time_completed FROM user_habit_log WHERE user_id = $1`

  db.query(sql, [userId])
  .then((dbResponse) => {
    console.log(dbResponse.rows)
    res.json(dbResponse.rows)
  }).catch((error) => {
    res.status(400)
    res.json({
      success: false,
      error: error
    })
  })
})




app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
