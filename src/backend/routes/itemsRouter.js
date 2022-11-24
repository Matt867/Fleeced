const express = require('express')
const itemRouter = express.Router()
const { Item, User, Order } = require('../models')
const fetch = require('isomorphic-fetch')

/*
Fetch item - view item
expects id passed through as request parameter
*/
itemRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        if (id) {
            const item = await Item.findByPk(id)
            res.send(item)
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.sendStatus(404)
    }
})

itemRouter.get('/', async (req, res) => {
    try {
        const items = (await Item.findAll()).filter((item) => {
            if (item.getOrder()) {
                return false
            } else {
                return true
            }
        })
        res.send(items)
    } catch (error) {
        res.sendStatus(400)
    }
})
/*
Create new item
Expects body containing token, item object:

token: token (from localstorage)
item: {
    description: "",
    title: "",
    price: *INT*,
    image: *Optional*,
    tags: [optional, if more than 5 given only first 5 taken in as tags]
}
*/
itemRouter.put("/add", async (req, res) => {
    try {
        const response = await fetch('http://localhost:3001/api/authenticateToken', {
            method: "GET",
            headers: {
                'authorization': `Basic ${req.body.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const auth = await response.json()
        if (auth.authenticated) {
            const username = auth.username
            const user = await User.findOne({ where: { username: username}})
        } else {
            res.sendStatus(401)
        }
    } catch (error) {
        res.sendStatus(400)
    }
    try {
        const item = req.body.item
        let tags = []
        for (let i = 0; i < 5; i ++) {
            if (item.tags[i]) {
                tags.push(item.tags[i])
            } else {
                tags.push(null)
            }
        }
        const obj = await Item.create({
            username: item.username,
            description: item.description,
            price: item.price,
            tag1: tags[0],
            tag2: tags[1],
            tag3: tags[2],
            tag4: tags[3],
            tag5: tags[4]
        })
        user.addItems(obj)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(400)
    }
})

/*
Edit item
Expects body containing id and feilds to update

body: {
    token: token,
    item: {
        id: id,
        description: "North face jacket - *not so* good condition"
    }
}
*/
itemRouter.patch("/edit", async (req, res) => {
    try {
        const response = await fetch('http://localhost:3001/api/authenticateToken', {
            method: "GET",
            headers: {
                'authorization': `Basic ${req.body.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const auth = await response.json()
        if (auth.authenticated) {
            const username = auth.username
            const user = await User.findOne({ where: { username: username}})
        } else {
            res.sendStatus(401)
        }
    } catch (error) {
        res.sendStatus(400)
    }
    try {
        if (req.body.item.id) {
            const item = await Item.findByPk(req.body.item.id)
            if (item.getUser() === user) {
                item.update(req.body.item)
                res.sendStatus(200)
            } else {
                res.sendStatus(401)
            }
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.sendStatus(404)
    }
})
/*
Expects body with token and item id:

body: {
    itemId: id,
    token: token
}
*/
itemRouter.delete("/delete", async (req, res) => {
    try {
        const response = await fetch('http://localhost:3001/api/authenticateToken', {
            method: "GET",
            headers: {
                'authorization': `Basic ${req.body.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const auth = await response.json()
        if (auth.authenticated) {
            const username = auth.username
            const user = await User.findOne({ where: { username: username}})
        } else {
            res.sendStatus(401)
        }
    } catch (error) {
        res.sendStatus(400)
    }
    try {
        if (req.body.itemId) {
            const item = await Item.findByPk(req.body.itemId)
            item.destroy()
            res.sendStatus(200)
        } else {
            throw new Error("bad req")
        }
    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = itemRouter
