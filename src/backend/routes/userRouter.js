const express = require('express')
const Router  = express.Router()

const userRouter = Router

userRouter.get("/", (req, res) => {
    res.status(200).send("express user router works")
})


module.exports = userRouter
