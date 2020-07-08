const express = require('express')
const { Sequelize } = require('sequelize');

let message = "All good"
const sequelize = new Sequelize('postgres://batman:secret@localhost:5432/myDB')
const app = express()
const port = 3000

sequelize.authenticate()
    .then(() => {})
    .catch(function (errors) {
        message = "Error while connecting to database"
    });

app.get('/', (req, res) => res.send(message))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
