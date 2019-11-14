var express     = require("express"),
    middleware  = require("../middleware/"),
    router      = express.Router();
    
router.get("/", middleware.isLoggedIn, function(req, res){
    res.render("dashboard", {currentUser: req.user});
});

module.exports = router;