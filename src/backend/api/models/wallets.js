'use strict';
module.exports = (sequelize, DataTypes) => {
  const wallets = sequelize.define('wallets', {
    saldo: DataTypes.FLOAT(1, 2).UNSIGNED.ZEROFILL,
    pix: DataTypes.STRING
  }, {});
  wallets.associate = function(models) {
    // associations can be defined here
  };
  return wallets;
};