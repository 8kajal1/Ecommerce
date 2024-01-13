const productController= {};
const productRepo= require('../repository/productRepository')
productController.addProduct=async(req,res)=>{
    let body=req.body
     let result = await productRepo.addProduct(body); //functionCall
     res.send(result);
}

productController.getAllProduct=async()=>{
    let pageSize=req.pageSize;
    let skipValue=req.pageNo*pageSize;
    let result=await productRepo.getAllProduct(pageSize,skipValue);
    res.send(result);

}
productController.filterProduct=async(req,res)=>{
    let query=req.query
    let result=await productRepo.filterProduct(query);
    res.send(result);
}
productController.updateProduct=async(req,res)=>{
    let body=req.body
    let exist=await productRepo.getProductByProductId(body);
    if(exist!=null){
        let result=await productRepo.updateProduct(body);
        return result;
    }else{
        res.send("product not found");
    }
}
productController.deleteProduct=async(req,res)=>{
    let body=req.body
    let exist=await productRepo.getProductByProductId(body);
    if(exist!=null){
        let result=await productRepo.deleteOne(body);
        res.send(result)
    }else{
        res.send("product not found")
    }
}
module.exports=productController