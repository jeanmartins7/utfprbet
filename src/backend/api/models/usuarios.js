const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {

  const usuarios = sequelize.define('wallets', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {});
  
  return usuarios;
};