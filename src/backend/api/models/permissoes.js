'use strict';
module.exports = (sequelize, DataTypes) => {
  const permissoes = sequelize.define('permissoes', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {});
  permissoes.associate = function(models) {
    // associations can be defined here
  };
  return permissoes;
};