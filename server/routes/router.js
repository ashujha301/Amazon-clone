const express =require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");


// get productdata api
router.get("/getproducts", async(req,res) => {
    try{
        const productsdata = await Products.find();
        // console.log("console the data"+ productsdata);
        res.status(201).json(productsdata);
    }catch(error){
        console.log("error "+ error.message);
    }
})


//get individual data
router.get("/getproductsone/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        // console.log(id);

        const individualdata = await Products.findOne({id:id});

        //console.log(individualdata + "individual data");

        res.status(201).json(individualdata);
    }catch{
        res.status(400).json(individualdata);
        console.log("error "+ error.message);
    }
})

module.exports = router;