let  mongoose  = require('mongoose');
let Schema = mongoose.Schema

let userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    resetToken : String,
    resetTokenEXP : String,
})

module.exports = mongoose.model('user', userSchema);