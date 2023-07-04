const betsData = require('../models/bets');
const usuariosData = require("../models/usuarios")
const uuid = require('uuid');

class BetsService {
  static async getAllBets(limite, pagina) {
    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));

    if (!limiteValido) {
      throw new Error('O valor do limite não é válido.');
    }

    const offset = (pagina - 1) * limite;
    try {
      const todasBets = await betsData.findAndCountAll({
        limit: Number(limite),
        offset: offset
      });
      return todasBets;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOneBet(id) {
    try {
      const bet = await betsData.findOne({
        where: {
          id: String(id)
        }
      });
      return bet;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAllBetsByUserId(userId, limite, pagina) {
    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));

    if (!limiteValido) {
      throw new Error('O valor do limite não é válido.');
    }

    const offset = (pagina - 1) * limite;
    try {
      const todasBets = await betsData.findAndCountAll({
        where: { usuario_id: userId },
        limit: Number(limite),
        offset: offset
      });
      return todasBets;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createBet(novaBet) {
    try {

      const user = await usuariosData.findOne({
        where: {
          id: String(novaBet.usuario_id)
        }
      });
      if (!user) {
        console.error('Usuário não encontrado');
        return;
      }

      const novaBetCriada = await betsData.create({
        id: uuid.v4(),
        usuario_id: novaBet.usuario_id,
        valor: novaBet.valor,
        disciplina: novaBet.disciplina,
        chute: novaBet.chute
      });
      return novaBetCriada;
    } catch (error) {
      throw new Error(error.message);
    }
  }  

  static async updateBet(id, novosDadosBet) {
    try {
      await betsData.update(novosDadosBet, {
        where: {
          id: String(id)
        }
      });
      const betAtualizada = await betsData.findOne({
        where: {
          id: String(id)
        },
        include: [{ model: betsData }]
      });
      return betAtualizada;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteBet(id) {
    try {
      await betsData.destroy({
        where: {
          id: String(id)
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updatePartialBet(id, novosDadosBet) {
    try {
      await betsData.update(novosDadosBet, {
        where: {
          id: String(id)
        }
      });
      const betAtualizada = await betsData.findOne({
        where: {
          id: String(id)
        },
        include: [{ model: betsData }]
      });
      return betAtualizada;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = BetsService;
