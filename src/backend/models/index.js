const User = require('./user.model')
const Item = require('./item.model')
const Order = require('./order.model')


Order.belongsTo(User)
User.hasMany(Order)

Order.hasMany(Item)

User.hasMany(Item)
Item.belongsTo(User)

module.exports = { User, Item, Order }
