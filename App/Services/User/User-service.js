const User = require('../../Modules/User/User-model');

const findUser = (data) =>{
    return User.findOne(data)
}

const createUser = (data) =>{
    return User.create(data);
}

const addLabel = (label,id) =>{
    return User.findOneAndUpdate({_id:id},{ $addToSet: { labels: label }}, {new: true, runValidators: true} );
}


module.exports ={
    findUser,
    createUser,
    addLabel
}