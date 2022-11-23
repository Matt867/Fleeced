const { Model, DataTypes} = require('sequelize')

const db = require('../db/db')

class User extends Model { }

User.init({
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
    }
}, {sequelize: db})

module.exports = User
