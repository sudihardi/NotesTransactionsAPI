const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')

const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addTransaction = require('./routes/transaction/addTransaction')
const getTransaction = require('./routes/transaction/getTransaction')
const editTransaction = require('./routes/transaction/editTransaction')
const deleteTransaction = require('./routes/transaction/deleteTransaction')

const addPromo = require('./routes/promo/addPromo')
const getPromo = require('./routes/promo/getPromo')
const editPromo = require('./routes/promo/editPromo')
const deletePromo = require('./routes/promo/deletePromo')

const addItem = require('./routes/items/addItem')
const getItem = require('./routes/items/getItem')
const editItem = require('./routes/items/editItem')
const deleteItem = require('./routes/items/deleteItem')

const app = express()

app.use(express.json())
app.use(rootRoute)

app.use(bodyParser.json())

app.use(addTransaction)
app.use(getTransaction)
app.use(editTransaction)
app.use(deleteTransaction)

app.use(addPromo)
app.use(getPromo)
app.use(editPromo)
app.use(deletePromo)

app.use(addItem)
app.use(getItem)
app.use(editItem)
app.use(deleteItem)

app.use(registerRoute)
app.use(loginRoute)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
