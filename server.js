const express = require('express')
const db = require('./db/db')


const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('client'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})