const express = require('express')
const db = require('./db/db.js')


const app = express()
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);

const pg = require("pg")
const port = 3000

app.use(express.json())
app.use(express.static('client'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
