var mongoose = require('mongoose');

var infoSchema = new mongoose.Schema({
        firstname       :   String, 
        lastname        :   String,
        email           :   String,
        phone           :   String,
        major           :   String,
        grade           :   String,
        minor           :   String,
        gender          :   String,
        college         :   String,
        gradyear        :   String,
        datathon2019    :   String,
        dsc80           :   String,
        upperdiv        :   String,
        special         :   String,
        shirtsize       :   String,
        diet            :   String,
        suggestions     :   String,
        essay           :   String
});
    
var userInfo = mongoose.model('userInfo', infoSchema);
    
module.exports = mongoose.model('info', infoSchema);