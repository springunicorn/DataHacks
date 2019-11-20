const   express         = require("express"),
        app             = express(),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        LocalMongoose   = require("passport-local-mongoose"),
        bodyParser      = require("body-parser"),
        flash           = require("connect-flash"),
        User            = require("./models/user"),
        home            = require("./routes/home"),
        apply           = require("./routes/apply"),
        dashboard       = require("./routes/dashboard"),
        hidden          = require("./hidden");

app.set("view engine", "ejs");
app.set("trust proxy", 1);
// Express will serve the files in the "public" directory
// Put css files there
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: hidden,
    cookie: { 
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 // A week
    },
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
//   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});

const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/test");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
   console.log("Mongoose connected.") 
});

app.use("/", home);
app.use("/apply", apply);
app.use("/dashboard", dashboard);

app.listen(8080, function() {
    console.log("Server listening on port 8080");
})