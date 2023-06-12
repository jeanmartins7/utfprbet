'use strict';
module.exports = (sequelize, DataTypes) => {
  const wallets = sequelize.define('wallets', {
    saldo: DataTypes.FLOAT,
    pix: DataTypes.STRING
  }, {});
  wallets.associate = function(models) {
    bets.belongsTo(models.usuarios, { foreignKey: 'usuario_id', unique: true });
  };
  return wallets;
};