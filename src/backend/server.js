const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const orderRouter = require('./routes/orderRouter')
const itemRouter = require('./routes/itemRouter')

app.use(express.json())

app.use('/users', userRouter)
app.use('/order', orderRouter)
app.use('/item', itemRouter)

app.listen(3000)
