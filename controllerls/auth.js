let User = require('../models/user');
// for hashing passwords
let bcrypt = require('bcryptjs');
// for sending mails through node
const  nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

// for sessions 
var session = require('express-session')

// for creting random token 
const crypto = require('crypto');

// crerte  transport 
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth:{
      api_key: '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'
    }
  })

)

// Signup method
exports.signUp =   (req,res,next) =>{
    console.log("we are inside signup method");
    let  email = req.body.email;
    let  password = bcrypt.hashSync(req.body.password,10);
    let user = new User({email,password});
    User.findOne({email:req.body.email}).then((data)=>{
        if(!data) {
            userData = user.save().then((data) =>{
                console.log(data);
                 res.send(data)
            })
        }
        else {
            res.send("email is alredy taken plese take another email")  
        }
       
    })
   }


// Login method
exports.login = (req,res,next) =>{
  const email = req.body.email;
  const password = req.body.password;
   User.findOne({ 'email': email }).then(user => {
      if (!user) {
        return res.send("error invalid email or password")
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            // Here we are passing the seesion  to your page 
            req.session.isLoggedIn=true;
            // and we are sending the success message
            return res.send("you have succesfully logged in ")
          }
          return res.send('email and password didinot match')
        })
})
}


// reset password  and store 
exports.resetPassword =    (req,res,next) =>{ 
  let token;
  const buf = crypto.randomBytes(32);
  token = buf.toString('hex');
  console.log(token);
  User.findOne({ email : req.body.email}).then((user)=>{
    user.resetToken = token;
    user.save()
    let email = req.body.email;
    console.log("we are printing the token" +token);
    transporter.sendMail({
      from:"mdvenkatesh14212@gmail.com",
      to:  email,
      subject:'password reset',
      html : `<h1>plses click the below link to reset the password<h1>
      <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
      `
    })
  }) 
.then(()=>{
  console.log("message sent")
  res.send("email sent plese check your mail address")
})

}

// reset the password with token id 
exports.resetPasswordByToken = (req,res,next) =>{
// get the token id 
console.log("we are inside reset passwordby token id")
  let tokenId = req.params.tokenId 
  User.findOne({resetToken:tokenId}).then((user) =>{
    let  password = bcrypt.hashSync(req.body.password,10);
    user.password = password;
    return user.save()
  }).then(() =>{
    console.log("you reset the password succesfully");
    res.send("password had been reset succefully")
  })
}


//  create a seession for all the loggedin user  and cookiee and pass csrf token 




// delete the session once the user signed out 
exports.logOut = (req,res,next) =>{
  User.findOne({email:req.body.email}).then(()=>{
    req.session.destroy(function(err) {
      // cannot access session here
      res.send("your seession is killed and logged out plese logge in to see your sessions")
    })
  })
 
}





// retype passwword matches or not 



