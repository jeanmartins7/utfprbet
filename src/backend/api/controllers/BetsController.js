const database = require('../models');

class BetsController {

  static async pegaTodasBets(req, res) {
    const { limite = 10, pagina = 1 } = req.query;
  

    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));
    if (!limiteValido) {
      return res.status(400).json({ error: 'O valor do limite não é válido.' });
    }
  
    const offset = (pagina - 1) * limite;
    try {
      const todasBets = await database.bets.findAndCountAll({
        limit: Number(limite),
        offset: offset
      });
      return res.status(200).json(todasBets);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaBet(req, res) {
    const { id } = req.params;
    try {
      const bet = await database.bets.findOne({
        where: {
          id: Number(id)
        },
        include: [{ model: database.bets }]
      });
      return res.status(200).json(bet);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaBet(req, res) {
    const novaBet = req.body;
    try {
      const novaBetCriada = await database.bets.create(novaBet);
      return res.status(200).json(novaBetCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaBet(req, res) {
    const { id } = req.params;
    const novosDadosBet = req.body;
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
      return res.status(200).json(betAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaParcialBet(req, res) {
    const { id } = req.params;
    const novosDadosBet = req.body;
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
        include: [{ model: database.bets}]
      });
      return res.status(200).json(betAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = BetsController;
