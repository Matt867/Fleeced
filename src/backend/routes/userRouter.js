const express = require('express')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const cors = require('cors')
const fetch = require('isomorphic-fetch')
const userRouter = express.Router()
const User = require("../models/user.model")
const { validPasswordCheck, validateCredentials, validateToken, getToken } = require('../middleware/userMiddleware')


/**
 * This route requires a body of:
 * {
 *      username: STRING,
 *      password: STRING,
 *      email: STRING
 * }
 */
userRouter.post('/signup', validPasswordCheck, async (req, res) => {
    try {
        let password = req.body.password

        let userCheck = await User.findOne({where: { username: req.body.username}})

        if (userCheck) throw new Error("User with that handle already exists!")

        bcrypt.hash(password, 9, async (err, hash) => {

            if (err) throw new Error(err)

            user = await User.create({
                username: req.body.username,
                password: hash,
                email: req.body.email
            })
            .then(
                res.status(200).send("User succesfully created")
            )
            .catch(
                err => {throw new Error(err)}
            )

        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})


/**
 * This route requires a body of:
 * {
 *      username: STRING,
 *      password: STRING,
 * }
 */
userRouter.post('/login', validateCredentials, getToken, (req, res) => {
    res.status(200).send(req.token)
})


/*
{
    token: STRING (token you get from localstorage)
}


will response with:
{
    username: USERNAME
    authenticated: BOOL true/false
}
*/
userRouter.post('/validateToken', validateToken, (req, res) => {
    const authenticated = req.auth
    res.status(200).send(authenticated)
})


module.exports = userRouter
