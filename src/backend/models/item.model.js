const { Model, DataTypes} = require('sequelize')
const db = require('../db/db')

class Item extends Model { }

Item.init({
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tag1: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    tag2: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    tag3: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    tag4:{
        type: DataTypes.STRING,
        defaultValue: null,
    },
    tag5: {
        type: DataTypes.STRING,
        defaultValue: null,
    }
}, {sequelize: db})

module.exports = Item
