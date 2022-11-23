const { Model, DataTypes} = require('sequelize')
const db = require('../db/db')

const User = db.define({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, {sequelize: db})

module.exports = User
