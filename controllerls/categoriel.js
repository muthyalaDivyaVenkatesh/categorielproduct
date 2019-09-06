const Categorie = require('../models/categoriel')
const Product = require('../models/product')

exports.addCategoriel = (req,res,next) =>{   
    console.log("we are inside categoriel products");
    console.log(req.body.categorie)
    let categorie = new Categorie({categorie:req.body.categorie,description:req.body.description})
    categorie.save().then((data) =>{
        res.send(data)
    })
}



exports.getCategorial =  (req,res,next) =>{
    console.log("we are inside the get method");
    console.log(req.params.id)
    Categorie.findOne({_id :req.params.id}).then((data) => {
        console.log(data)
        res.send(data)
    })

} 


exports.getAllCategories = (req,res,next) =>{
    console.log("we are inside get all categeries");
    Categorie.find().then(data => res.send(data))
}



exports.deleteCategerie = (req,res,next) =>{
    console.log("we are inside get all categeries");
    Categorie.findOneAndDelete({_id:req.params.id}).then(data => res.send("success fuly deleted the data"))
}


exports.updateCategrie = (req,res,next) =>{
    console.log("we are  updating the categorie")
    console.log(req.params.cid)
    Categorie.findOneAndUpdate({_id:req.params.cid, categorie :req.body.categorie}).then(data => res.send("updted succesfu"))
}


exports.getAllProductsOfCategorie = (req,res,next) =>{
    console.log("we are inside the get all products of certain categerie");
    console.log(req.params.cid);
    Product.find({catId:req.params.cid}).populate('catId').then((data) =>{
        console.log(data);
        if(data.length<1) {
            res.send("no products added to this categerie")
        }
        else {

        res.send(data);
        }

    })
    
    
}


// exports.getAllproductsOfCategerie = (req,res,next) =>{
//     console.log("we are inside the getAllProducts of certaincatgerie")
//     console.log(req.params.cid)
//     Categorie.getAllCategorieProducts(req.params.cid).then(data => res.send(data))
// }


// for update product 

// exports.updateCategrie = (req,res,next) =>{
//     console.log("we are  updating the categorie")
//     console.log(req.params.cid)
//     Categorie.updateCategrie(req.params.cid,req.body.categorie).then(data => res.send("sucessfully updated database"))
// }



 
