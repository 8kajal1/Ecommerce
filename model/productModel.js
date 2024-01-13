const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/EcommerceDB',{useNewUrlParser:true})
const productSchema= new mongoose.schema({
    name:String,
    productType:{type:String, enum:["Men","Women","Boy", "Girl"]},
    color: String,
    brand:String,
    price:Number,
    quantity:Number,
    size:String,
    productId:String,
    // seller: {
    //     _id:String,
    //     name:String,
    //     location:String,
    //     rating: String,
    //     ShopName: String
    // },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
    
})
module.exports=mongoose.model('products',productSchema)