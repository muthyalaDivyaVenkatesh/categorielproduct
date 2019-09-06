const { check, validationResult, body } = require('express-validator');


const vaiditePassword = () => {

  (body('confirmpassword').custom((value, req) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
    // Indicates the success of this synchronous custom validator

  }))().then((value) =>{
    console.log(value)
  })
}



module.exports = vaiditePassword

 // console.log("we are inside the validate password method")
  // console.log(req.body.email)
  // return  (body('confirmpassword').custom((value, req ) =>{
  //   console.log("we are inside the confirm password")
  //   console.log(value)
  //   console.log(req.body.password)
  //     if(value !== req.body.password) {
  //         Promise.reject( false)
  //     }
  //     else {
  //9       return Promise.resolve("your are redy to move")
  //     }
  // }))()