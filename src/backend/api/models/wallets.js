'use strict';
module.exports = (sequelize, DataTypes) => {
  const wallets = sequelize.define('wallets', {
    saldo: DataTypes.FLOAT,
    pix: DataTypes.STRING,
    usuario_id: {
      type: DataTypes.INTEGER,
      unique: true
    }
  }, {});
  wallets.associate = function(models) {
  };
  return wallets;
};