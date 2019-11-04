var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
   email    :   {type: String, required: true, max: 100},
   password :   {type: String, required: true, max: 100},
   group    :   String,
});

module.exports = mongoose.model('UserModel', userSchema);