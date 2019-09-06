




























///////////////////////// using mongodb driver/////////////////////////////////////////////////////////////////
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (() => {
//   MongoClient.connect(
    
//     'mongodb+srv://mdv:123ABCabc@cluster0-556nl.mongodb.net/shop?retryWrites=true&w=majority'
//   )
//     .then(client => {
//       console.log('Connected!');
//       _db = client.db();
//     })
//     .catch(err => {
//       console.log(err);
//       throw err;
//     });
// })();


// const getDb =  () => {
 
//   if (_db) {
//     return _db;
//   }
//   throw 'No database found!';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;