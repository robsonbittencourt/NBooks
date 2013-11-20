var mongoose = require('mongoose'),
    Schema = mongoose.Schema, 
    ObjectId = Schema.ObjectId;

var types = 'admin client'.split(' ')
var UserSchema = new Schema({
    id: ObjectId, 
    name: { type: String, trim: true, required: true }, 
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },  
    type: { type: String, enum: types, required: true }
})

var Users = mongoose.model('Users', UserSchema);