const database = require('../models');

class BetsService {
  static async getAllBets(limite, pagina) {
    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));

    if (!limiteValido) {
      throw new Error('O valor do limite não é válido.');
    }

    const offset = (pagina - 1) * limite;
    try {
      const todasBets = await database.bets.findAndCountAll({
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
      const bet = await database.bets.findOne({
        where: {
          id: Number(id)
        },
        include: [{ model: database.bets }]
      });
      return bet;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createBet(novaBet) {
    try {
      const novaBetCriada = await database.bets.create(novaBet);
      return novaBetCriada;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateBet(id, novosDadosBet) {
    try {
      await database.bets.update(novosDadosBet, {
        where: {
          id: Number(id)
        }
      });
      const betAtualizada = await database.bets.findOne({
        where: {
          id: Number(id)
        },
        include: [{ model: database.bets }]
      });
      return betAtualizada;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteBet(id) {
    try {
      await database.bets.destroy({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updatePartialBet(id, novosDadosBet) {
    try {
      await database.bets.update(novosDadosBet, {
        where: {
          id: Number(id)
        }
      });
      const betAtualizada = await database.bets.findOne({
        where: {
          id: Number(id)
        },
        include: [{ model: database.bets }]
      });
      return betAtualizada;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = BetsService;
