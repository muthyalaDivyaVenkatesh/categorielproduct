// just create scahema here
let   mongoose =require('mongoose');
let Schema = mongoose.Schema

// creat a category here 
let categorySChema  = new Schema({
    categorie:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    }
})


module.exports = mongoose.model('category',categorySChema)




























































































































































































//////////////////////////////////////// using mongodb driver ////////////////////////////////////////////////

// let   getDb = require('../utils/db').getDb;
// const mongodb = require('mongodb')
// var ObjectId = require('mongodb').ObjectID;
// // connect to your db and write schema to it here

// class Categoriel  {

//     constructor(categoriel,id) {
//         this.categorie = categoriel 
//     }
    
//     save() {
//         let dbOp;
//         const db =  getDb();
//         return db.collection('categerie').insertOne({categoriel:this.categorie}).then((data) => (data));
//     } 

//      static getCategorie(id) {
//         let dbOp;
//         const db =  getDb();
//         return db.collection('categerie').findOne({"_id":ObjectId(id)}).then((data) => data)
//     }


//     static getAllCategorie() {
//         let dbOp;
//         const db = getDb();
//         return db.collection('categerie').find().toArray().then((getallcategeries) => {
//             console.log(getallcategeries)
//             dbOp = getallcategeries
//             return dbOp
//         } )

//     }

// // delete categerie
//     static deleteCategorie(id) {
//         let dbOp;
//         const db = getDb();
//         return db.collection('categerie').deleteMany({
//             _id:ObjectId(id)
//         }).then( success => success)
//     }


//     // get all categrie products 
//     static getAllCategorieProducts(id) {
//         const db = getDb();
//         // return db.collection('product').
//         return db.collection('product').find({categorielId :ObjectId(id)}).toArray()
//         .then(data => data)
//     }

//     // static update a categerie  with ui need two urls first get and next post 


//     static updateCategrie(cid,categerie) {
//         const db = getDb();
//         return db.collection('categerie').updateOne({
//             cid:ObjectId(cid)
//         },{$set :{
//             categorie:categerie
//         }})

//     }
// }
// module.exports = Categoriel
