
const verificaUsuario = () => {
    return async (req, res, next) => {

        const { usuarioId } = req;
        const { id } = req.params;

        if (usuarioId != id) {
            return res.status(403).json({ mensagem: 'Usuario inconsistente' });
        }

        return next()

    }
}

module.exports = verificaUsuario