require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {getFood, postFood, getReview, getOnlyThree} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get('/food', getFood)
app.get('/reviews', getReview)
app.get('', getOnlyThree)

app.post('/food', postFood)

app.listen(SERVER_PORT, () => console.log(`We living it up on ${SERVER_PORT}`))