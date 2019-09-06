// which routes we are going to use 

let express = require('express')
let  router = express.Router()
let  categoriel = require('../controllerls/categoriel');

// import csurf here impoer it as csrf  
var csrf = require('csurf');

// use csrf here 
let  csrfProtection = csrf()

// import the seesion from middleware 
const isLoggedIn = require('../middleware/isauth');

//import the validatePassword


// post  categoriel
router.post('/addcategoriel',isLoggedIn , categoriel.addCategoriel)

// get categorie
router.get('/getcategoriel/:id', isLoggedIn, csrfProtection, categoriel.getCategorial)

// get all  categries
router.get('/getallcategories', isLoggedIn, categoriel.getAllCategories)

// delete a categerie
 router.get('/deletecategerie/:id',  isLoggedIn  , csrfProtection ,categoriel.deleteCategerie)

 // update categerie

 router.post('/updatecategerie/:cid', isLoggedIn , categoriel.updateCategrie)

// router getall categerie products

router.get('/getallproductsofcategerie/:cid', isLoggedIn , csrfProtection ,categoriel.getAllProductsOfCategorie)

// update the categerie we need two methods here  at last





module.exports = router;