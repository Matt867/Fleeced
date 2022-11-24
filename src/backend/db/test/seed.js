const db = require('../db')
const { User, Item, Order } = require('../../models/index.js')


const sync = async () => {
    await db.sync({force: true})

    await User.bulkCreate([
        {
            username: "Matt",
            password: "123",
            email: "m@s.com"
        },
        {
            username: "Ben",
            password: "123",
            email: "m@s.com"
        },
        {
            username: "Tobi",
            password: "123",
            email: "m@s.com"
        },
        {
            username: "Lucy",
            password: "123",
            email: "m@s.com"
        },
        {
            username: "Carlos",
            password: "123",
            email: "m@s.com"
        },
        {
            username: "Kareen",
            password: "123",
            email: "m@s.com"
        },
    ])

    await Item.bulkCreate([
        {
            description: "LALALA",
            price: 4.99,
            title: "Patagonia Fleece",
            tag1: "Cool"
        },
        {
            description: "LALALA",
            price: 4.99,
            title: "Socks",
            tag1: "Cool"
        },
        {
            description: "LALALA",
            price: 4.99,
            title: "Beanie",
            tag1: "Cool"
        },
        {
            description: "LALALA",
            price: 4.99,
            title: "Hoodie",
            tag1: "Cool"
        },
        {
            description: "LALALA",
            price: 4.99,
            title: "Gloves",
            tag1: "Cool"
        },
        {
            description: "LALALA",
            price: 4.99,
            title: "Trousers",
            tag1: "Cool"
        },
        {
            description: "LALALA",
            price: 4.99,
            title: "Jeans",
            tag1: "Cool"
        },
        {
            description: "LALALA",
            price: 4.99,
            title: "Shirt",
            tag1: "Cool"
        },
    ])

}

sync()
