var express = require('express');

var router = express.Router();

router.get("/", function(req, res) {
    res.render("signup");
});

router.post("/", function(req, res) {
    console.log(req.body);
    res.render("signup")
});

module.exports = router;