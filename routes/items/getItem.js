const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../middleware/authenticationMiddleware')

app.use(authentication)

app.get("/item", (req, res) => {
    res.send(db.get('items'))
});

module.exports = app