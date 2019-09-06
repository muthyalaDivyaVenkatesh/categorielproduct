const express  = require('express');
router =  express.Router();

//confirming  the password and confirm password matches
const { check, validationResult,body } = require('express-validator');


// user created
 let auth   = require('../controllerls/auth');

// import check password middleware here

let  validatePassword = require('../middleware/checkpassword');

 // signup the user
 router.post('/signup', [validatePassword] , auth.signUp);

 // login the user
 router.post('/login', auth.login);

 // reset the user
 router.post('/reset', auth.resetPassword);

 //reset token
 router.post('/reset/:tokenId', auth.resetPasswordByToken);

 //kill the seeson by logging out
 router.post('/logout',auth.logOut)



 module.exports = router;
