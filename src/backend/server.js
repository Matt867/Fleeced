const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const orderRouter = require('./routes/orderRouter')
const itemsRouter = require('./routes/itemsRouter')
const { propfind } = require('./routes/userRouter')

app.use(express.json())

app.use('/users', userRouter)
app.use('/order', orderRouter)
app.use('/item', itemsRouter)

app.listen(3000)
