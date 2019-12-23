const User = require('../../Modules/User/User-model');

const findUser = async (data) =>{
    return User.findOne(data);
}

const createUser = async (data) =>{
    return User.create(data);
}

module.exports ={
    findUser,
    createUser
}