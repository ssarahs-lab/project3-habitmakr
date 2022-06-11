
const pg = require('pg')

const db = new pg.Pool({
  database: 'habit_tracker',
})

module.exports = db