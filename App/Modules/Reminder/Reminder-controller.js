const { findUser, createUser,addLabel } = require('../../Services/User/User-service');
const { Success, Created } = require('../../Helpers/Response/Success');
const { BadRequest, Unauthorized, Conflict } = require('../../Helpers/Response/ClientErrors');
const { hashPassword,verifyPassword,generateToken } = require('../../Helpers/Auth/Auth');
const { isBadRequest } = require('../../Helpers/Data-Format/Format')

const createReminder = async (req, res) => {
    

}

const getReminders = async (req,res) =>{
    let record = await findUser({_id:req.user._id});
    return Success(res, "User information", record);

}


const updateReminder = async (req,res) =>{
    
}


const deleteReminder = async (req, res) => {
    
}


module.exports = { createReminder, updateReminder,deleteReminder, getReminders, }