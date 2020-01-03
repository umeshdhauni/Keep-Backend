const { verifyToken } = require('../Helpers/Auth/Auth')
const { findUser } = require('../Services/User/User-service');
const {Unauthorized} = require('../Helpers/Response/ClientErrors')

exports.authenticate = (req, res, next) =>{
    try {
        const token = req.headers.authorization.split('Bearer ')[1];
        const decoded = verifyToken(token);
        const { id } = decoded;
        let user = findUser({_id:id});
        if(!user){
            return Unauthorized(res,'Unauthorized');
        }
        req.user = user;
        next();
    } catch (e) {
        if (e.name == 'TokenExpiredError') return Forbidden(res, "Authorization token Expired");
        return Unauthorized(res, "Please login to continue");
    }
}