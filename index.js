const express = require('express')
const { Sequelize } = require('sequelize');

// Create database connection
const message = "All good"
const sequelize = new Sequelize('postgres://batman:wrong_secret@localhost:5432/myDB')
sequelize.authenticate().catch(function(errors) { 
    message = "Error whic"
    console.log(errors)
});

// Setup express application

const app = express()
const port = 3000

app.get('/', (req, res) => res.send(message))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
