const { Model, DataTypes} = require('sequelize')
const db = require('../db/db')

const Order = db.define({
    orderId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {sequelize: db})

module.exports = Order
