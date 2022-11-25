const path = require('path')
const express = require('express')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const cors = require('cors')
const fetch = require('isomorphic-fetch')
const itemRouter = express.Router()
const {User, Item} = require("../models")
const { Op } = require('sequelize')
const { validPasswordCheck, validateCredentials, validateToken, getToken } = require('../middleware/userMiddleware')

/*
Fetch item - view item
expects id passed through as request parameter
*/
itemRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        if (id) {
            const item = await Item.findByPk(id)
            res.json(item)
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.sendStatus(404)
    }
})
/*
Call to return all items not associated with an order object
*/
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

header: {
    authorization: TOKEN
}
body: {
    "title" : STRING,
    "price" : INT,
    "description": STRING,
    "image": STRING,
    "tags": [<STRING>] array of up to 5
}
*/
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

        res.status(201).json({
            "id": item.id
        })
    } else {
        res.status(400).send("Missing crucial information about the item")
    }

})

/*
Edit item
Expects body containing id and feilds to update
headers: {
    authorization: TOKEN
}
body: {

    item: {
        id: id,
        description: "North face jacket - *not so* good condition"
    }
}
*/
itemRouter.patch("/edit", validateToken, async (req, res) => {
    try {

        if (req.auth.authenticated) {
            const username = req.auth.username
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
header: {
    authorization: TOKEN
}
body: {
    itemId: id,
}
*/
itemRouter.delete("/delete", validateToken, async (req, res) => {
    try {

        if (req.auth.authenticated) {
            const username = req.auth.username
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
/*
Search:
params.query is user query, searches description agiainst query
*/

itemRouter.get('/search/:query', async (req, res) => {
    const query = req.params.query
    console.log(query)
    try {
        const results = await Item.findAll({
            where: {
                [Op.or]: [
                {title: {
                    [Op.substring]: query
                }},
               { description: {
                    [Op.substring]: query
                }}]
            }
        })
        res.send(results)
    } catch (error) {
        res.send(400)
    }
})
/*
Get User asspciated with item (seller)
requires body with itemId:

body: {
    itemId: id
}
returns 404 if user not found, 400 if ItemId not included in body
*/
itemRouter.post("/user", async (req, res) => {
    const id = req.body.itemId
    try {
        if (id) {
            const item = await Item.findByPk(id)
            const user = await item.getUser()
            if (user) {
                res.send({"username": user.username, "email": user.email})
            } else {
                throw new Error ('No User associated with item')
            }
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.sendStatus(404)
    }
})

/**
 * This is a post route which will allow you to upload an image to a specific listing by selecting the listing from the :id param,
 * The file upload button component MUST HAVE: name='imageUpload'
 *
 * header: {
 *      authorization: TOKEN
 * }
 *
 * body: {
 *  IN HERE IS A FILE UPLOAD, the file upload must come from a input with name='imageUpload' and type='file'
 * }
 *
 * The auth token must match the user who created the listing otherwise a 401 (unauthorized) is sent
 */
itemRouter.post('/image/upload/:id', validateToken, async (req, res) => {

    const item = await Item.findByPk(req.params.id)

    if (!item) res.status(404).send("No item with that ID")

    const seller = await item.getUser()

    if (!seller) res.status(404).send("No seller linked to item")

    if (seller.username !== req.auth.username) res.sendStatus(401)

    if (!req.files) {
        return res.status(400).send("No files were uploaded")
    }

    const file = req.files.imageUpload

    const imagePath = __dirname + "/../content/images/" + file.name
    console.log(imagePath)

    const response = file.mv(imagePath, async (err) => {
        if (err) {
            res.sendStatus(500)
        }

        await Item.update({
            image: file.name
        }, {
            where: { id: item.id }
        })
        return { added: true, path: imagePath }
    })

    res.send(response)
})


/**
 * No auth token,
 * simply run GET /item/image/get/:id to receive the image back
 */
itemRouter.get('/image/get/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id)

    if (item) {
        const image = item.image
        res.sendFile(path.join(__dirname, `../content/images/${image}`))
    } else {
        res.status(404).send("Could not find file")
    }
})

module.exports = itemRouter
