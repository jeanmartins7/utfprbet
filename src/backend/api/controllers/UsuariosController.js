const database = require('../models')

class UsuariosController {

  static async pegaTodosUsuarios(req, res) {
    const { limite = 10, pagina = 1 } = req.query;
  

    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));
    if (!limiteValido) {
      return res.status(400).json({ error: 'O valor do limite não é válido.' });
    }
  
    const offset = (pagina - 1) * limite;
    try {
      const todosUsuarios = await database.usuarios.findAndCountAll({
        limit: Number(limite),
        offset: offset
      });
      return res.status(200).json(todosUsuarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmUsuario(req, res) {
    const { id } = req.params;
    try {
      const usuario = await database.usuarios.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaUsuario(req, res) {
    const novoUsuario = req.body;
    try {
      const novoUsuarioCriado = await database.usuarios.create(novoUsuario);
      return res.status(200).json(novoUsuarioCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaUsuario(req, res) {
    const { id } = req.params;
    const novosDadosUsuario = req.body;
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
      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaParcialUsuario(req, res) {
    const { id } = req.params;
    const novosDadosUsuario = req.body;
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
      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UsuariosController;
