const { Sequelize } = require('sequelize');
const config = require("../config/config.json")

const env = process.env.NODE_ENV
const sequelize = new Sequelize(config[env]);


module.exports = sequelize