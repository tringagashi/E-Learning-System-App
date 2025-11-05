const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mern1234',
    database: 'node'
})

app.post('/signup', (req, res) => {
    const newUser = 'INSERT INTO users(`Name_of_user`, `Email_of_user`, `Password_of_user`) VALUES (?);'
    
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(newUser, [values], (err, data) => {
        if(err) return res.json('Error while posting the data')
        return res.json(data)
    })
})


app.post('/login', (req, res) => {
    const newUser = 'SELECT * FROM users WHERE `Email_of_user` = ? AND `Password_of_user` = ?'

    db.query(newUser, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json('Error while reading the user`s data')
        if(data.length > 0){
            return res.json('Success')
        } else{
            return res.json('Failed!')
        }
    })
})


app.listen(5000, () => {
    console.log('listening on port 5000')
})