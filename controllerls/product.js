let Product  = require('../models/product');



exports.addProduct = (req,res,next) =>{
    console.log("we are inside categoriel products");
    console.log(req.params.cid)
    const addProduct = new Product ({title:req.body.title,description:req.body.description,catId:req.params.cid})
    addProduct.save().then((data) => {
        console.log(data)
        res.status(200).send(data)
    })
}

exports.getAllProducts = (req,res,next) =>{
    console.log("we are inside get all products ")
    Product.find().then((data) =>{
        res.send(data)
    })
}


exports.getProductDetails = (req,res,next) =>{
    console.log("we are inside get one product");
    Product.findById({_id:req.params.pid}).then((data) =>{
        res.status(200).send(data)
    })
    
}

exports.deleteProduct = (req,res,next) => {
    console.log("we are inside the delete product");
    Product.findOneAndDelete({_id:req.params.pid}).then((data) =>{
        console.log("we have successfully deleted the data")
        res.send("succesfully deleted the data")
    })
}

exports.updateProduct = (req,res,next) =>{
    console.log("we are inside update products routes");
    Product.findByIdAndUpdate({_id: req.params.pid}).then(data =>{
        data.title = req.body.title
        data.description = req.body.description
        data.save()
        console.log("we have succefully updated the data")
        res.send("succesfully updated the data")
    })

}





