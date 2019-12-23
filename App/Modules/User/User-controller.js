const { findUser, createUser } = require('../../Services/User/User-service');
const { Success, Created } = require('../../Helpers/Response/Success');
const { BadRequest, Unauthorized, Conflict } = require('../../Helpers/Response/ClientErrors');
const { hashPassword } = require('../../Helpers/Auth/Auth');
const { badRequest } = require('../../Helpers/Data-Format/Format')

const login = async (req, res) => {

}

const signup = async (req, res) => {
    let data = { ...req.body };
    if(badRequest(['name','email','phone','password'],data)){
        return BadRequest(res,'Missing Data');
    }
    let user = await findUser({ email: data.email });
    if (user) {
        return Conflict(res, 'User already exist with this email');
    }

    data.password = await hashPassword(data.password);

    let record = await createUser(data);
    return Created(res, 'User is created successfully', record);

}

module.exports = { login, signup }