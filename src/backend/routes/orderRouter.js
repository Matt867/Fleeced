const express = require('express')
const orderRouter = express.Router()
const Item = require('../models')

/*
expects body containing array of current item ids in order:

body: {
    itemIds: []
}
*/
orderRouter.post("/", async (req, res) => {
    try {
        if (req.body.itemIds) {
            let items = []
            itemIds.map((id) => {
                let item = await Item.findByPk(id)
                items.push(item)
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
