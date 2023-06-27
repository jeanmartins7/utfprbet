const Sequelize = require("sequelize")
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD,  
{host:  process.env.DB_HOST, port: process.env.DB_PORT, dialect: process.env.DB_DIALECT})

sequelize.authenticate()
    .then(() => console.log("Conectado no Mysql!"))
    .catch(error => console.log(error))

module.exports = sequelize