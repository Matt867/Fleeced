const { Model, DataTypes} = require('sequelize')
const db = require('../db/db')

class Order extends Model { }

Order.init({
}, {sequelize: db})

module.exports = Order
