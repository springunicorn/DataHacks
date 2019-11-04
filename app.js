var express         = require("express"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    LocalMongoose   = require("passport-local-mongoose"),
    bodyParser      = require("body-parser"),
    User            = require("./models/usermodel"),
    home            = require("./routes/home"),
    signup          = require("./routes/signup");

var app = express();
// Express will serve the files in the "public" directory
// Put css files there
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/test");

var db          = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
   console.log("Mongoose connected.") 
});



app.use("/", home);
app.use("/signup", signup);

app.listen(8080, function() {
    console.log("Server listening on port 8080");
})