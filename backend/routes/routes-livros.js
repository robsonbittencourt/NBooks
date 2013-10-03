var mongoose = require('mongoose'),
    Livros = mongoose.model('Livros'),
    ObjectId = mongoose.Types.ObjectId,
    restify = require('restify');


module.exports = function (app, config) {

    function buscarLivros(req, res, next) {
        // buscar livros
    }

    function buscarLivro(req, res, next) {
        if (!req.params.id)
            return next(new restify.MissingParameterError('Id do livro é obrigatório.'));

        Livros.findById(req.params.id, function (err, livro) {
            if (err) {
                res.send(new restify.MissingParameterError('Livro não encontrado.'));

                res.send(livro);
                return next();
            }
        });
    }

    function criarLivro(req, res, next) {
        var livro = new Livro(req.params.livro);
        livro.save(function (err) {
            if (err) {
                var errObj = err;
                if (err.err) errObj = err.err;
                return next(new restify.InternalError(errObj));
            }

            res.send(user);
            return next();
        });
    }

    function atualizarLivro(req, res, next) {
        if (!req.params.id)
            return next(new restify.MissingParameterError('Id do livro é obrigatório.'));

        Livros.findById(req.params.id, function (err, livro) {
            if (err) {
                res.send(new restify.MissingParameterError('Livro não encontrado.'));

                livro = req.params.livro;
                livro.save(function (err) {
                    if (err) {
                        var errObj = err;
                        if (err.err) errObj = err.err;
                        return next(new restify.InternalError(errObj));
                    }

                    res.send(user);
                    return next();
                });
            }
        });
    }

    function apagarLivro(req, res, next) {
        if (!req.params.id)
            return next(new restify.MissingParameterError('Id do livro é obrigatório.'));

        Livros.findById(req.params.id).remove(function (err) {
            if (err) {
                var errObj = err;
                if (err.err) errObj = err.err;
                return next(new restify.InternalError(errObj));
            }

            res.send({});
            return next();
        });
    }

    app.get('/api/livros/', buscarLivros);
    app.get('/api/livros/:id', buscarLivro);
    app.post('/api/livros/', criarLivro);
    app.put('/api/livros/:id', atualizarLivro);
    app.del('/api/livros/:id', apagarLivro);
}
