const productModel = require("../model/productModel")

const productRepository = {}
const Product = require('../model/productModel.js')
productRepository.addProduct = async (body) => {
    let insertBody = new Product(body)
    let result = await insertBody.save()
    return result;
}
productRepository.getProductByProductId = async (body) => {
    let result = await Product.findOne({ name: body.name, productId: body.productId })
    return result;
}
productRepository.getAllProduct = async (pageSize, skipValue) => {
    let result = await Product.find().limit(skipValue).skip(pageSize);
    return result;
}
productRepository.filterProduct = async (query) => {
    let result = await Product.findOne(query)
    return result;

}
productRepository.updateProduct = async (body) => {
    let result = await Product.updateOne({ _id: body.id }, { $set: body })
    return result;
}
productRepository.deleteProduct = async (body) => {
    let result = await Product.deleteOne({ _id: body.id })
    return result;

}
module.exports = productRepository