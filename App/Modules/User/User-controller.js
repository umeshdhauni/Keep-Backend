const { findUser, createUser,addLabel } = require('../../Services/User/User-service');
const { Success, Created } = require('../../Helpers/Response/Success');
const { BadRequest, Unauthorized, Conflict } = require('../../Helpers/Response/ClientErrors');
const { hashPassword,verifyPassword,generateToken } = require('../../Helpers/Auth/Auth');
const { isBadRequest } = require('../../Helpers/Data-Format/Format')

const login = async (req, res) => {
    let data = { ...req.body };
    if(isBadRequest(['email','password'],data)){
        return BadRequest(res,'Missing Data');
    }
    let user = await findUser({ email: data.email });
    if (!user) {
        return Unauthorized(res,'Wrong credentials');
    }

    let isPassword = await verifyPassword(data.password,user.password);
    if(!isPassword){
        return Unauthorized(res,'Wrong credentials');
    }

    let token =  generateToken(user);
    return Success(res, "Login Success", { jT: token,user:user._id });

}

const signup = async (req, res) => {
    let data = { ...req.body };
    if(isBadRequest(['name','email','phone','password'],data)){
        return BadRequest(res,'Missing Data');
    }
    let user = await findUser({ email: data.email });
    if (user) {
        return Conflict(res, 'User already exist with this email');
    }

    data.password = await hashPassword(data.password);
    // data.refreshToken = 

    let record = await createUser(data);
    return Created(res, 'User is created successfully', record);

}

const getUser = async (req,res) =>{
    let record = await findUser({_id:req.user._id});
    return Success(res, "User information", record);

}

const getUserByMail = async (req,res) =>{
    let data = {...req.query};
    let currentUser = await findUser({_id:req.user._id});
    let record = [];
    if(currentUser.email != data.email){
        record = await findUser({email:data.email});
        record = [record];
    }
    return Success(res, "User information", record);

}

const updateLabel = async (req,res) =>{
    let data = {...req.body}
    data.user = req.user._id;
    let record = await findUser({_id:req.user._id});
    if(record){
       await addLabel(data.label,record._id); 
       return Success(res, "Label information", {label:data.label});
    }
}

module.exports = { login, signup,getUser, updateLabel,getUserByMail }