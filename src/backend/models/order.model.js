const { Model, DataTypes} = require('sequelize')
const db = require('../db/db')

class Order extends Model { }

Order.init({
    orderId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {sequelize: db})

module.exports = Order
