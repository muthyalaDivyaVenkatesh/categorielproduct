// first step

models code : -

static getcategorie(id) {
    let dbOp;
    const db =  getDb();
    db.collection('products').findOne({"_id":ObjectId(id)}).then((data) => console.log(data))
    // o/p - { _id: 5d5e0bbb09f1d11e040b521c, categoriel: 'names' }
}


///////////////////controllerls //////////////////////////////////////////// 


exports.getCategorial =  (req,res,next) =>{
    // check the async
    console.log("we are inside the get method");
    let getData = Categorie.getcategorie(req.params.id);
    // getData.then((val)=> console.log("val = " , val))

} 


// //////////////////////////////////////////////////////second step /////////////////////////////////////////////////////
static getcategorie(id) {
    let dbOp;
    const db =  getDb();
    return 
    db.collection('products').findOne({"_id":ObjectId(id)}).then((data) => console.log(data))
    // o/p - { _id: 5d5e0bbb09f1d11e040b521c, categoriel: 'names' }
}


////////////////////////////////just clerify the doubt ////////////////

// if(!data) {
//     userData = user.save().then((data) =>{
//         console.log(data);
//          res.send(data)
//     })
// }
// else {
//     res.send("email is alredy taken plese take another email")  
// }

/////////////////////////////////////////////// crypto /////////////

// exports.resetPassword =  async (req,res,next) =>{
//     // crete a random token 
//     let token;
//     // we are using callback to to get in random bytes
//     await crypto.randomBytes(32, (err, buf) => {
//       if (err) throw err;
//       console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
//       token = buf.toString('hex')
//     });

//        console.log(token)  // printing undefined


/////// sending session little diffrently ///////    
// app.use('/products',  isLogedIn,productRoutes); 

// app.use('/products',productRoutes , isLogedIn );

