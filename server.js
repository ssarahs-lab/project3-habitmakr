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
    console.log(dbResult.rows)
    response.json(dbResult.rows)
  })
})


// add a custom habit
app.post('/api/addcustomhabit', (request, response)=>{

  const sql = 'INSERT INTO identities(identities, image_related_identity_url) VALUES ($1, $2);'

  // the URL below generates a random image from unsplash
  db.query(sql, [request.body.identity, "https://source.unsplash.com/random/800x800/?img=1"])
  .then(dbResult => {
    response.json({success: true})
  })
})


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
