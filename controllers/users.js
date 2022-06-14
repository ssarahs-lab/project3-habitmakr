const express = require('express')
const bcrypt = require('bcrypt')
const db = require('../db/db.js')
const router = express.Router()

router.post('/', (request, response) => {
    const name = request.body.username
    const email = request.body.email
    const password = request.body.password
    const checkPassword = request.body.checkPassword
    const checkPassWordCharacters = /^[a-zA-Z0-9~_&*%@$]+$/
 
    const generateHash = (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    }

    if(!name || !email || !password || !checkPassword) {
        response.status(400)
        response.json({ success: false, message: "Please complete all fields" })
        return
    }

    const sqlEmail = `
        SELECT email FROM users
    `
    db.query(sqlEmail)
        .then(dbResponse => {
            for(const dbEmail of dbResponse.rows) {
                if(email === dbEmail.email) {
                    response.status(400)
                    response.json({
                        success: false, 
                        message: "Email already used"
                    })
                    return
                }
                    
            }
            if (password !== checkPassword){
                response.status(400)
                response.json({
                    success: false, 
                    message: "Your passwords do not match"
                })
                return
            } else if (password.length < 8 || password.length > 16) {
                response.status(400)
                response.json({
                    success: false, 
                    message: "Your password should be 8 - 16 characters in length."
                })
                return
            } else if (checkPassWordCharacters.test(password)){
                response.status(400)
                response.json({
                    success: false, 
                    message: "Your password needs to include an uppercase letter, number and symbol"
                })
                return
            } else {
                const password_hash = generateHash(password)
                const sql = `
                    INSERT INTO users (username, email, password_hash) 
                    VALUES ($1, $2, $3)
                    `
                db.query(sql, [name, email, password_hash])
                    .then(dbResponse => {
                        response.json({ success: true })
                    })
                    .catch((reason) => {
                        response.status(500).json({
                            success: false,
                            message: 'Unknown server error'
                        })
                    })
            }
    })

    
})

module.exports = router