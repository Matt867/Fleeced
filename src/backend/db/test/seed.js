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
            description: "Good quality, 2019 collection, barely worn",
            price: 49.9,
            title: "Patagonia Fleece",
            tag1: "Cool",
            image: "7.jpg"
        },
        {
            description: "Barely being held together, more a patchwork of torn fabric than socks",
            price: 0.49,
            title: "Socks",
            tag1: "Cool",
            image: "4.jpg"
        },
        {
            description: "Too small for me as I'm really smart and have a huge brain - might fit you though, size XL and good condition",
            price: 4.99,
            title: "Beanie",
            tag1: "Cool",
            image: "8.jpg"
        },
        {
            description: "Very poor condition, found by the side of the road, I think it was drenched in urine - smells awful, but it's a ralph Luaren hoodie.",
            price: 4.99,
            title: "Hoodie",
            tag1: "Cool",
            image: "5.jpg"
        },
        {
            description: "Didn't fit my hands, as shown in court while I was on trial for *alegedly* murdering my wife, good quality, smooth leather.",
            price: 4.99,
            title: "Gloves",
            tag1: "Cool",
            image: "3.jpg"
        },
        {
            description: "Good quality, durable Dickies basics, good deal - I'm being very generous with the price.",
            price: 4.99,
            title: "Trousers",
            tag1: "Cool",
            image: "9.jpg"
        },
        {
            description: "Levi's, Decent condition, size 28 W 30 L",
            price: 4.99,
            title: "Jeans",
            tag1: "Cool",
            image: "2.jpg"
        },
        {
            description: "Coo, shirt, sad to see it go",
            price: 4.99,
            title: "Shirt",
            tag1: "Cool",
            image: "6.jpg"
        },
    ])

}

sync()
