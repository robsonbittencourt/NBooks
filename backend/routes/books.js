var mongoose = require('mongoose'),
    Book = mongoose.model('Books'),
    ObjectId = mongoose.Types.ObjectId,
    restify = require('restify');


module.exports = function (app, config) {    
    function findAll(req, res, next) {
        console.log('find');
        Book.find(function(err, books){            
            console.log(books);
            res.send(books);
            return next();  
        });
    }

    function findOne(req, res, next) {
        if (!req.params.id)
            return next(new restify.MissingParameterError('Id is required.'));

        Books.findById(req.params.id, function (err, book) {
            if (err) 
                res.send(new restify.MissingParameterError('Book not found.'));

            res.send(book);
            return next();            
        });
    }

    function create(req, res, next) {                     
        //var teste = JSON.parse(req.body);

        console.log(req.body);  
        var book = new Book(
        {
            isbn: req.body.isbn, 
            title: req.body.title,
            year: req.body.year,
            publisher: req.body.publisher,
            state: req.body.state,
            author: req.body.author,
            pageNumber: req.body.pageNumber,
            notes: req.body.notes,
            quantity: req.body.quantity,
            resume: req.body.resume
        });       
        
        console.log(book);  
        book.save();

        res.send(book);
        return next();

        // console.log("Livro -:>" + book);

        // book.save(function (err) {
        //     if (err) {
        //         var errObj = err;
        //         if (err.err) 
        //             errObj = err.err;
        //         return next(new restify.InternalError(errObj));
        //     }

        //     res.send(book);
        //     return next();
        // });
    }

    function update(req, res, next) {
        if (!req.params.id)
            return next(new restify.MissingParameterError('Id is required.'));

        Books.findById(req.params.id, function (err, book) {
            if (err) {
                res.send(new restify.MissingParameterError('Book not found.'));

                book = req.params.book;
                book.save(function (err) {
                    if (err) {
                        var errObj = err;
                        if (err.err) errObj = err.err;
                        return next(new restify.InternalError(errObj));
                    }

                    res.send(book);
                    return next();
                });
            }
        });
    }

    function deleteOne(req, res, next) {
        if (!req.params.id)
            return next(new restify.MissingParameterError('Id is required.'));

        Books.findById(req.params.id).remove(function (err) {
            if (err) {
                var errObj = err;
                if (err.err) errObj = err.err;
                return next(new restify.InternalError(errObj));
            }

            res.send({});
            return next();
        });
    }

    app.get('/api/books/', findAll);
    app.get('/api/books/:id', findOne);
    app.post('/api/books/', create);
    app.put('/api/books/:id', update);
    app.del('/api/books/:id', deleteOne);
}
