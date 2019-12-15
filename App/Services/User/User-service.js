const User = require('../../Modules/User/User-model');

const findUser = async (data) =>{
    return User.findOne(data);
}

module.exports ={
    findUser
}