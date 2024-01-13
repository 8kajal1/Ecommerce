const express=require('express')
const userController=require('../controller/userController')
const router=express.Router()
router.post('/addUser',async(req,res)=>{
    userController.addUser(req,res);

})
router.post('/findAll',async(req,res)=>{
    userController.findAll();

})
router.post('/filter',async(req,res)=>{
    userController.filterOfUser();


})
router.post('/updateUser',async(req,res)=>{
    userController.updateUser();
    
})
router.delete('/deleteUser',async(req,res)=>{
    userController.deleteUser();
})
module.exports=router;