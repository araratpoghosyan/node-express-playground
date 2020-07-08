const express = require('express')
const { Sequelize } = require('sequelize');

// Create database connection

const sequelize = new Sequelize('postgres://batman:secret@localhost:5432/myDB')
sequelize.authenticate().then(function(errors) { console.log(errors) });

// Setup express application

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))