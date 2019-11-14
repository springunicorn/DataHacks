const   express     = require("express"),
        router      = express.Router(),
        passport    = require("passport"),
        User        = require("../models/user"),
        { check, validationResult } = require('express-validator'),
        sanitizeHtml = require('sanitize-html');
router.get("/", function(req, res) {
    res.render("home", {currentUser: req.user});
});

router.get("/signup", function(req, res) {
    if (req.user) {
        res.redirect("/dashboard");
    } else {
        res.render("signup");
    }
});

router.post("/signup", function(req, res) {
    console.log(req.body);
    let sanitizedBody = sanitizeHtml(req.body);
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/apply");
        })
    })
});

router.get("/login", function(req, res) {
    if (req.user) {
        res.redirect("/dashboard");
    } else {
        res.render("login", {currentUser: req.user});
    }
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect:"/dashboard",
        failureRedirect:"/login"
    }), function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

module.exports = router;