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

const pg = require("pg")
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
    const sqlforUserHabitsTable = 'INSERT INTO user_habits(habit_name, user_determined_frequency_of_reminder, user_id, habits_list_id) VALUES ($1, $2, $3, $4);'

    console.log(request.body)
    console.log(request.session.userId)
      
  
    db.query(sqlforUserHabitsTable, [request.body.habitname, request.body.reminderfrequency, request.session.userId, request.body.habits_list_id])
    .then(dbResult => {
      response.json({success: true})
    })
  }
  
})

app.delete('/api/deleteHabit/:id', (request, response) => {
  let sql = `DELETE FROM user_habits WHERE habits_list_id = $1 AND user_id = $2`
  console.log(request.params.id)
  db.query(sql, [request.params.id, request.session.userId])
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


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
