var mongoose = require('mongoose');

var infoSchema = new mongoose.Schema({
        firstname   :   String,
        lastname    :   String,
        email       :   String,
        school      :   String,
        phone       :   String,
        major       :   String,
        grade       :   String,
});
    
var userInfo = mongoose.model('userInfo', infoSchema);
    
module.exports = mongoose.model('info', infoSchema);