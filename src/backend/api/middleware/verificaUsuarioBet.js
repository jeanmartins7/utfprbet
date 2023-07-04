const BetsService = require('../services/BetsService');

const verificaUsuarioBet = () => {
    return async (req, res, next) => {

        const { usuarioId } = req;
        const { id } = req.params;
        const bet = await BetsService.getOneBet(id);

        if (usuarioId != bet.usuario_id) {
            return res.status(403).json({ mensagem: 'Usuario inconsistente' });
        }

        return next()

    }
}

module.exports = verificaUsuarioBet