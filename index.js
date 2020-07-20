const express = require('express')
const { Sequelize } = require('sequelize');
require('dotenv').config()

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPass}@localhost:5432/${dbName}`)
const app = express()
const port = 3000

sequelize.authenticate()
    .then(() => {
        const message = "All good"
    })
    .catch(function (errors) {
        message = "Error while connecting to database"
    });

app.get('/', (req, res) => res.send(message))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))