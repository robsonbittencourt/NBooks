var mongoose = require('mongoose'),
    Schema = mongoose.Schema, 
    ObjectId = Schema.ObjectId;

var BookSchema = new Schema({
    id: ObjectId, 
    title: { type: String, trim: true, required: true }, 
    isbn: { type: String, trim: true, required: true },
    publisher: { type: String, trim: true, required: true },  
    state: { type: String, trim: true, required: true },  
    author: { type: String, trim: true, required: true },  
    pageNumber: { type: Number, required: true}, 
    year: { type: Number, required: true }, 
    quantity: { type: Number, required: true}, 
    resume: { type: String, trim: true}, 
    notes: { type: String, trim: true}
})

var hasValue = function (value) {
  return value && value.length
}

mongoose.model('Books', BookSchema)