'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    usuario_id: DataTypes.UUID,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {});
  usuarios.associate = function(models) {
    // associations can be defined here
  };
  return usuarios;
};