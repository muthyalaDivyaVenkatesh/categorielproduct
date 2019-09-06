let express = require('express');
let router = express.Router();
let Product = require('../controllerls/product');

// use csrf here 
var csrf = require('csurf');

// use csrf here 
let  csrfProtection = csrf()

// write routes here 
                                                    // id
router.post('/addproduct/:cid',Product.addProduct)   //5d655c0208f00319b2a298ab 

// we are getting all the products
router.get('/getallproducts', csrfProtection , Product.getAllProducts)

// get single product   5d6560b76c5e1a1e557e16f3
router.get('/productdetails/:pid', Product.getProductDetails)


// delete products  5d6560d49eb6aa1e706acfb1
router.get('/deleteproduct/:pid',Product.deleteProduct)

// update product  5d65667getallproductsofcategerie21ca70b22ca72bf79
router.post('/updateproduct/:pid',Product.updateProduct)




//  app.use('/products/deleteproduct/5d6560d49eb6aa1e706acfb1',productRoutes);
 //  




module.exports  = router;