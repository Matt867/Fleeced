const { Model, DataTypes} = require('sequelize')
const db = require('../db/db')

const Item = db.define({
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
        type: DataTypes.STRING
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
