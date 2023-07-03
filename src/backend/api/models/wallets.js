const { v4: uuidv4 } = require('uuid');
const { DataTypes } = require('sequelize');
const sequelize = require('../services/SequelizeService');
const usuarios = require("./usuarios")

const wallets = sequelize.define('wallets', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  saldo: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  pix: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

wallets.belongsTo(usuarios, {
  constraint: true,
  foreignKey: "usuarios_id"
})  

usuarios.hasOne(wallets, {foreignKey: "usuarios_id"})


module.exports = wallets;