const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./routes/userRouter')

app.use(cors())
app.use(express.json())

app.use("/user", userRouter)

app.listen(3000)
