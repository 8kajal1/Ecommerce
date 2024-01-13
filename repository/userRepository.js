const userRepository = {}
const userModel = require('../model/userModel')
userRepository.addUser = async (body) => {
    let insertBody = new userModel(body);
    let result = await insertBody.save();
    return result;
}
userRepository.findAll = async (skipValue, pageSize) => {
    let result = await userModel.find().limit(pageSize).skip(skipValue);
    let totalCounts = await userModel.countDocuments();
    return { data: result, count: totalCounts };
}
userRepository.filterOfUser = async (body, pageSize,skipValue) => {
    let result = await userModel.find(body).skip(skipValue).limit(pageSize);
    return result;
}
userRepository.updateUser = async (body) => {
    let result = await userModel.updateOne({ _id: body.id }, { $set: body })
    return result;
}
userRepository.existUser = async (body) => {
    let result = await userModel.findOne({ email: body.email })
    return result;
}

userRepository.deleteUser = async (body) => {
    let result = await userModel.deleteOne({ _id: body.id })
    return result;
}

module.exports = userRepository;