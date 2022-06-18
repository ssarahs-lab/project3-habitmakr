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
    // console.log(dbResult.rows)
    response.json(dbResult.rows)
  })
})

app.get('/api/categories/:id', (request, response) => {
    console.log("db qeuried..")
    let id = request.params.id
    const sql = "SELECT * FROM habits_list WHERE identities_id = $1"
    db.query(sql, [id])
    .then((dbResult) => {
      console.log(dbResult.rows)
      response.json(dbResult.rows)
    })
})


// add a custom habit
app.post('/api/addcustomhabit', (request, response)=>{

  const sqlforUserHabitsTable = 'INSERT INTO user_habits(habit_name, user_determined_frequency_of_reminder) VALUES ($1, $2);'

  console.log(request.body)
    

  db.query(sqlforUserHabitsTable, [request.body.habitname, request.body.reminderfrequency])
  .then(dbResult => {
    response.json({success: true})
  })
})


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
