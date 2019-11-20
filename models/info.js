var mongoose = require('mongoose');

var infoSchema = new mongoose.Schema({
        firstname       :   { type: String, maxlength: 25},
        lastname        :   { type: String, maxlength: 25},
        email           :   { type: String, maxlength: 50},
        phone           :   { type: String, maxlength: 25},
        major           :   { type: String, maxlength: 25},
        grade           :   { type: String, maxlength: 25},
        minor           :   { type: String, maxlength: 25},
        gender          :   { type: String, maxlength: 25},
        college         :   { type: String, maxlength: 25},
        gradyear        :   { type: String, maxlength: 25},
        datathon2019    :   { type: String, maxlength: 25},
        dsc80           :   { type: String, maxlength: 25},
        upperdiv        :   { type: String, maxlength: 25},
        special         :   { type: String, maxlength: 300},
        shirtsize       :   { type: String, maxlength: 25},
        diet            :   { type: String, maxlength: 300},
        suggestions     :   { type: String, maxlength: 300},
        essay           :   { type: String, maxlength: 1024}
});
    
module.exports = mongoose.model('info', infoSchema);