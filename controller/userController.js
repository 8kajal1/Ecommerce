const userController={};
const userRepo=require('../repository/userRepository')
userController.addUser=async(req,res)=>{
    let body=req.body
    let result=await userRepo.addUser(body);
    res.send(result)
}
userController.findAll=async(req,res)=>{
    let pageSize=req.pageSize;
    let skipValue=req.pageNo*pageSize;
    let result=await userRepo.findAll(skipValue,pageSize);//function call
    res.send(result)
}
userController.filterOfUser=async(req,res)=>{
    let body=req.body
    let pageSize=req.query.pageSize;
    let skipValue=req.query.pageNo*pageSize;
    let result = await userRepo.filterOfUser(body, skipValue,pageSize);
    res.send(result)

}
userController.updateUser=async(req,res)=>{
    let body=req.body;
    let exist=await userRepo.existUser(body)
    if(exist!=null){
        let result=await userRepo.updateUser(body)
        res.send(result)
    }else{
        res.send({msg:"user not found"})
    }
}
userController.deleteUser=async(req,res)=>{
    let body=req.body;
    let exist=await userRepo.existUser(body);
    if(exist!=null){
        let result= await userRepo.deleteUser(body);
        res.send(result);
    }else{
        res.send({msg:"user not found"})
    }
}
module.exports=userController;