const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const orderRouter = require('./routes/orderRouter')
const { propfind } = require('./routes/userRouter')


app.use('/users', userRouter)
app.use('/order', orderRouter)

app.listen(3000)
