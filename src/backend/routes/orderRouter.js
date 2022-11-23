const express = require('express')
const orderRouter = express.Router()
const Item = require('../models')

/*
expects body containing array of current item ids in order:

body: {
    itemIds: []
}
*/
orderRouter.post("/", (req, res) => {
    try {
        if (req.body.itemIds) {
            itemIds.map((id) => {
                let items = []
                items.push(Item.findByPk(id))
            })
            res.send(items)
        } else {
            throw new Error("No item ids passed")
        }
    } catch (error) {
        res.sendStatus(404)
    }
})


module.exports = orderRouter
