const database = require('../models');

class UsuariosService {
  static async getAllUsuarios(limite, pagina) {
    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));

    if (!limiteValido) {
      throw new Error('O valor do limite não é válido.');
    }

    const offset = (pagina - 1) * limite;
    try {
      const todosUsuarios = await database.usuarios.findAndCountAll({
        limit: Number(limite),
        offset: offset
      });
      return todosUsuarios;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOneUsuario(id) {
    try {
      const usuario = await database.usuarios.findOne({
        where: {
          id: Number(id)
        }
      });
      return usuario;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createUsuario(novoUsuario) {
    try {
      const novoUsuarioCriado = await database.usuarios.create(novoUsuario);
      return novoUsuarioCriado;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateUsuario(id, novosDadosUsuario) {
    try {
      await database.usuarios.update(novosDadosUsuario, {
        where: {
          id: Number(id)
        }
      });
      const usuarioAtualizado = await database.usuarios.findOne({
        where: {
          id: Number(id)
        }
      });
      return usuarioAtualizado;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteUsuario(id) {
    try {
      await database.usuarios.destroy({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updatePartialUsuario(id, novosDadosUsuario) {
    try {
      await database.usuarios.update(novosDadosUsuario, {
        where: {
          id: Number(id)
        }
      });
      const usuarioAtualizado = await database.usuarios.findOne({
        where: {
          id: Number(id)
        }
      });
      return usuarioAtualizado;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UsuariosService;
