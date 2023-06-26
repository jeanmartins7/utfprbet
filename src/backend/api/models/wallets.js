const { v4: uuidv4 } = require('uuid');

'use strict';
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
  wallets.associate = function(models) {
    wallets.belongsTo(models.usuarios, {
      foreignKey: 'usuario_id',
      as: 'user'
    });
  };
  return wallets;
};