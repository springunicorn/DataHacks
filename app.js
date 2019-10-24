var express = require("express");
var app = express();

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

app.listen(8080, function() {
    console.log('Server listening on port 8080');
})