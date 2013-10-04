var mongoose = require('mongoose'),
    Schema = mongoose.Schema, 
    ObjectId = Schema.ObjectId;

var LivroSchema = new Schema({
    id: ObjectId, 
    nome: { type: String, trim: true, required: true }, 
    isbn: { type: String, trim: true, required: true },
    editora: { type: String, trim: true, required: true },  
    estado: { type: String, trim: true, required: true },  
    autor: { type: String, trim: true, required: true },  
    numeroPaginas: { type: Number, required: true}, 
    ano: { type: Number, required: true }, 
    quantidade: { type: Number, required: true}, 
    resumo: { type: String, trim: true}, 
    notasConteudo: { type: String, trim: true}
})

var hasValue = function (value) {
  return value && value.length
}

mongoose.model('Livros', LivroSchema)