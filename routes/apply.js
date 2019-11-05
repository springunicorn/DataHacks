var express     = require("express"),
    router      = express.Router();
    
router.get("/", function(req, res){
    res.render("apply");
});

module.exports = router;