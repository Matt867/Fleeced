const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')


app.use('/users', userRouter)

app.listen(3000)
