const { findUser } = require('../../Services/User/User-service');
const {Success,Created} = require('../../Helpers/Response/Success');
const {BadRequest,Unauthorized} = require('../../Helpers/Response/ClientErrors');

const login = async (req, res) => {

}

const signup = async (req, res) => {
    let data = req.body;
    let user = await findUser({ email: data.email });
    if(user){
        return 
    }
}

module.exports = { login, signup }