'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    usuario_id: DataTypes.UUID,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
    deefaultScope: {
      attribute: {
        exclude: ['senha']
      }
    }
  });
  usuarios.associate = function(models) {
    usuarios.belongsToMany(models.roles, {
      through: models.usuarios_roles,
      as: 'usuario_roles',
      foreignKey: 'usuario_id'
    })
    usuarios.belongsToMany(models.permissoes, {
      through: models.usuarios_permissoes,
      as: 'usuario_permissoes',
      foreignKey: 'usuario_id'
    })
  };
  return usuarios;
};