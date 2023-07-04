const WalletsService = require('../services/WalletsService');

const verificaUsuarioWallet = () => {
    return async (req, res, next) => {

        const { usuarioId } = req;
        const { id } = req.params;
        const wallet = await WalletsService.getOneWallet(id);

        if (usuarioId != wallet.usuarios_id) {
            return res.status(403).json({ mensagem: 'Usuario inconsistente' });
        }

        return next()

    }
}

module.exports = verificaUsuarioWallet