var express     = require("express"),
    router      = express.Router(),
    middleware  = require("../middleware/"),
    userInfo    = require("../models/info");
    
router.get("/", middleware.isLoggedIn, function(req, res){
    res.render("apply");
});

router.post("/", middleware.isLoggedIn, function(req, res){
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.user.username;
    let phone = req.body.phonenumber;
    let grade = req.body.schoolyear;
    let major = req.body.major;
    let minor = req.body.minor;
    let gender = req.body.gender;
    let college = req.body.college;
    let gradyear = req.body.gradyear;
    let datathon2019 = req.body.datathon;
    let dsc80 = req.body.dsc80;
    let upperdiv = req.body.upperdiv;
    let special = req.body.special;
    let shirtsize = req.body.shirtsize;
    let diet = req.body.diet;
    let suggestions = req.body.suggestions;
    let essay = req.body.essay;
    
    var info = new userInfo({
        firstname       :   firstname, 
        lastname        :   lastname,
        email           :   email,
        phone           :   phone,
        major           :   major,
        grade           :   grade,
        minor           :   minor,
        gender          :   gender,
        college         :   college,
        gradyear        :   gradyear,
        datathon2019    :   datathon2019,
        dsc80           :   dsc80,
        upperdiv        :   upperdiv,
        special         :   special,
        shirtsize       :   shirtsize,
        diet            :   diet,
        suggestions     :   suggestions,
        essay           :   essay,
    });
    
    info.save();
    res.redirect("/dashboard");
});

module.exports = router;