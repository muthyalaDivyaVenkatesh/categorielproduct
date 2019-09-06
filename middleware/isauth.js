const isLoggedIn = (req,res,next) =>{
    if(!req.session.isLoggedIn){
        return res.send("plese login to see this page")
    }
    next()
}


module.exports = isLoggedIn