const db = require('../db')
const { User, Item, Order } = require('../../models/index.js')


const sync = async () => {
    await db.sync({force: true})
}

sync()
