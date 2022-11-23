const { User, Order, Item } = require("../models")
const bcrypt = require('bcrypt')

function validPasswordCheck (req, res, next) {
    let password = req.body.password
    console.log(password)
    const requirement = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")
    if (requirement.test(password)) {
        next()
    } else {
        res.status(422).send('Password does not meet complexity requirement')
    }
}

async function validateCredentials (req, res, next) {
    let username = req.body.username
    let password = req.body.password

    try {
        user = await User.findOne({
            where: {
                username: username
            }
        })

        if (!user) throw new Error("Invalid username or password")

        await bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                next()
            } else {
                res.status(400).send("Invalid username or password")
            }

        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getToken(req, res, next) {
    let username = req.body.username

    fetch("http://localhost:3001/api/generateToken",
    {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identifier: username
        })
    })
    .then(response => response.json())
    .then(data => {
        req.token = data
        next()
    })
    .catch(err => {throw new Error})
}

async function validateToken (req, res, next) {
    const token = req.body.token

    const response = await fetch('http://localhost:3001/api/authenticateToken', {
        method: "GET",
        headers: {
            'authorization': `Basic ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const data = await response.text()
    req.auth = data
    next()
}

module.exports = { validPasswordCheck, validateCredentials, validateToken, getToken }
