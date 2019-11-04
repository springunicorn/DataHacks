var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
   email    :   {type: String, required: true},
   password :   {type: String, required: true},
   group    :   String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);