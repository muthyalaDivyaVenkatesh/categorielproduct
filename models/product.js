const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({

title:{
    type:String,
    required:true
},

description:{
    type:String,
    required:true
},

catId : {
    type: Schema.Types.ObjectId,
    ref:'category',
    require:true
}
});


module.exports = mongoose.model('product',productSchema);





























////////////////////////////////////////////////////////// using mongodb driver/////////////////////////////////////////

// now try products 
// let   getDb = require('../utils/db').getDb;
// const mongodb = require('mongodb')
// var ObjectId = require('mongodb').ObjectID;


// class Product {
//     constructor(categorieId,product,description){
//         this.categorieId = ObjectId(categorieId)
//         this.product = product
//         this.description = description
//     }


//     save() {
//         // get the db connection 
//         let db  = getDb();
//         return db.collection('product').insertOne({categorielId:this.categorieId , product: this.product , description:this.description})
//         .then((data) => (data));
//     }


// }


// module.exports = Product