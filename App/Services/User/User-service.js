const User = require('../../Modules/User/User-model');

const findUser = async (data) =>{
    return User.findOne(data)
}

const createUser = async (data) =>{
    return User.create(data);
}

const addLabel =  async(label,id) =>{
    return User.findOneAndUpdate({_id:id},{ $addToSet: { labels: label }}, {new: true, runValidators: true} );
}


module.exports ={
    findUser,
    createUser,
    addLabel
}