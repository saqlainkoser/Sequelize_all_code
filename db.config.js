const Sequelize = require('sequelize')
const dbName = 'customer'
const dbUser = 'root'
const dbPassword = '12345678'

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host:"localhost",
    port:3306,
    dialect:'mysql'
})

const db={}
db.Sequelize = Sequelize
db.sequelize =sequelize

db.customers = require('./customer.model')(sequelize,Sequelize)

module.exports = db;