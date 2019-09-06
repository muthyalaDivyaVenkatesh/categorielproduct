const express = require('express');
const app = express();

// session middleware
var session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);



// Routes we are importingf here
const categorielRoutes = require('./routes/categoriel')
const productRoutes = require('./routes/products')
const authRoutes = require('./routes/auth')

// middleware 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// session middleware 
const isLogedIn = require('./middleware/isauth');
var csrf = require('csurf');
// const mongoConnect = require('./utils/db').mongoConnect;

// middle ware bodyparser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, 'public')));

// connection Uri 
const MONGODBURL = 'mongodb+srv://mdv:123ABCabc@cluster0-556nl.mongodb.net/shop?retryWrites=true&w=majority';


// use store here 
const store = new mongoDbStore({
    uri: MONGODBURL,
    collection:'sessions',
})

// set app session here 
app.use(session({
    secret: 'mdvenkatesh',
    resave: false,
    saveUninitialized: false,
    store:store
  }))

// csrf protection 
let  csrfProtection = csrf()

// use your routes
app.use('/categoriel',categorielRoutes);

// now use producturls
 app.use('/products',  isLogedIn,productRoutes);

//  categoriel/getallproductsofcategerie/5d655c0208f00319b2a298ab

app.use(authRoutes);

// auth routes

// listen to the port 
app.listen('3001',async ()=>{
    mongoose.connect('mongodb+srv://mdv:123ABCabc@cluster0-556nl.mongodb.net/shop?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>{
        console.log("we are listining to the port 3001")
        console.log("we are connected to mongoose")
    })
   
})

