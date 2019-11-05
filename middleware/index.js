module.exports = {
    isLoggedIn: function(req, res, next){
        if(req.isAuthenticated()){
            console.log("logged in");
            return next();
        }
        res.redirect("/login");
    }
}