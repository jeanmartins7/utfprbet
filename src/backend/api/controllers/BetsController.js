const BetsService = require('../services/BetsService');

class BetsController {
  static async getAllBets(req, res) {
    const { limite = 10, pagina = 1 } = req.query;

    try {
      const todasBets = await BetsService.getAllBets(limite, pagina);
      return res.status(200).json(todasBets);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getOneBet(req, res) {
    const { id } = req.params;
    try {
      const bet = await BetsService.getOneBet(id);
      return res.status(200).json(bet);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  static async getAllBetsByUserId(req, res) {
    try {
      const { userId } = req.params;
      const { limite = 10, pagina = 1 } = req.query;
      const bets = await BetsService.getAllBetsByUserId(userId,limite,pagina);
      return res.status(200).json(bets);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createBet(req, res) {
    const novaBet = req.body;
    try {
      const novaBetCriada = await BetsService.createBet(novaBet);
      return res.status(200).json(novaBetCriada);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateBet(req, res) {
    const { id } = req.params;
    const novosDadosBet = req.body;
    try {
      const betAtualizada = await BetsService.updateBet(id, novosDadosBet);
      return res.status(200).json(betAtualizada);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteBet(req, res) {
    const { id } = req.params;
    try {
      await BetsService.deleteBet(id);
      return res.status(200).json({ message: 'Aposta deletada com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updatePartialBet(req, res) {
    const { id } = req.params;
    const novosDadosBet = req.body;
    try {
      const betAtualizada = await BetsService.updatePartialBet(id, novosDadosBet);
      return res.status(200).json(betAtualizada);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BetsController;
