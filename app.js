var express = require("express");
var app = express();

var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://127.0.0.1/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
   console.log("Mongoose connected.") 
});

// Express will serve the files in the "public" directory
// Put css files there
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/bye", function(req, res){
    res.send("Bye bye");
})

app.post("/signup",  function(req, res){
    
})

app.listen(8080, function() {
    console.log('Server listening on port 8080');
})