const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../middleware/authenticationMiddleware')

app.use(authentication)

app.delete("/item", (req, res) => {
    const query = req.query;
    const id = query.id;
    db.remove("items", id)
    res.status(202).send("Delete Accepted!")
    return;
});

module.exports = app