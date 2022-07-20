require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {getFood, postFood, getReview, getEntrees, getAppetizers, getDrinks, deleteReview} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get('/food', getFood)
app.get('/reviews', getReview)
app.get('/entrees', getEntrees)
app.get('/appetizers', getAppetizers)
app.get('/drinks', getDrinks)

app.post('/food', postFood)

app.delete('/reviews/:id', deleteReview)

app.listen(SERVER_PORT, () => console.log(`We living it up on ${SERVER_PORT}`))