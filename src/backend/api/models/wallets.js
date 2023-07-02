const { v4: uuidv4 } = require('uuid');
const usuarios = require("./usuarios")

module.exports = (sequelize, DataTypes) => {
  const wallets = sequelize.define('wallets', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true
    },
    saldo: DataTypes.FLOAT,
    pix: DataTypes.STRING
  }, {});

  wallets.belongsTo(usuarios.Model, {
    foreignKey: 'autor'
  })
  usuarios.Model.hasMany(wallets, { foreignKey: 'autor' })

  return wallets;
};

