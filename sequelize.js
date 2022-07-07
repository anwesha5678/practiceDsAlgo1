const Sequelize = require('sequelize')

const userModel = require('./user')

const sequelize = new Sequelize('social_media', 'postgres', 'anwesha12345', {
    host: process.env.DATABASEHOST,
    dialect: 'postgres',
    //operatorsAliases: false,
})
userModel(sequelize, Sequelize)

module.exports = sequelize