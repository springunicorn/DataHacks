var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/bye", function(req, res){
    res.send("Bye bye");
})

app.listen(8080, function() {
    console.log('Server listening on port 8080');
})