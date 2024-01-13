const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/EcommerceDB',{useNewUrlParser:true})
const schema= new mongoose.schema({
    name:String,
    email:String,
    gender:String,
    mobileNo:Number,
    age:Number,
    DOB:Number
})
module.exports=mongoose.model('users',schema)