const express = require('express')
const orderRouter = express.Router()
const { User, Item, Order } = require('../models')
const {validateToken} = require('../middleware/userMiddleware')


/*
expects body containing array of current item ids in order and header of jwt:
header : {
    authentication: Bearer TOKEN
}
body: {
    itemIds: []
}
*/
orderRouter.post("/createOrder", validateToken, async (req, res) => {
    try {

        if (req.auth.authenticated) {

            const user = await User.findOne({ where : { username: req.auth.username }})

            if (req.body.itemIds && user) {
                let items = []
                const order = await Order.create()
                for (let i = 0; i < req.body.itemIds.length; i++) {
                    const item = await Item.findByPk(req.body.itemIds[i])
                    await order.setUser(user)
                    await item.setOrder(order)
                }
                res.status(200).send("All items added to order table!")
            } else {
                throw new Error("No item ids passed")
            }

        } else {
            res.sendStatus(401)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
})


module.exports = orderRouter
