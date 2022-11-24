const express = require('express')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const cors = require('cors')
const fetch = require('isomorphic-fetch')
const itemRouter = express.Router()
const {User, Item} = require("../models")
const { validPasswordCheck, validateCredentials, validateToken, getToken } = require('../middleware/userMiddleware')

itemRouter.post('/add', validateToken, async (req, res) => {
    const description = req.body.description
    const price = req.body.price
    const title = req.body.title
    const image = req.body.image
    const tags = req.body.tags

    if (description && price && title && image) {
        const user = await User.findOne({ where: {
            username: req.auth.username
        }})

        if (!user) res.status(404).send("User does not exist")

        const item = await Item.create({
            description: description,
            price: price,
            title: title,
            image: image,
            tag1: tags[0],
            tag2: tags[1],
            tag3: tags[2],
            tag4: tags[3],
            tag5: tags[4]
        })

        item.setUser(user)

        res.sendStatus(201)
    } else {
        res.status(400).send("Missing crucial information about the item")
    }

})


module.exports = itemRouter
