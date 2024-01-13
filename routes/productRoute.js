const express= require('express')
const productController=require('../controller/productController')
const router=express.Router()
router.post('/addProduct',async(req,res)=>{
    productController.addProduct(req,res)
})
router.get('/findProduct',async(req,res)=>{
   productController.getAllProduct();
})
router.post('/filter',async(req,res)=>{
    productController.filterProduct();
})
router.post('/updateProduct',async(req,res)=>{
    productController.updateProduct(req,res);

})
router.post('delete',async(req,res)=>{
    productController.deleteProduct(req,res);
})
module.exports=router