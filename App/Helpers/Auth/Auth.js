const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { signOptions, verifyOptions } = require('../../Constants/KeyOptions');

const hashPassword = async function (password) {
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) reject(err)
            resolve(hash)
        });
    });

    // Return hashed password
    return hashedPassword
}


const verifyPassword = async function (password, hash) {
    const verifyPassword = await new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });

    return verifyPassword;
}

const generateToken = (data) => {
    return jwt.sign({
        id: data._id,
        email:data.email,
        date:new Date()
    }, '2387JHKJH&^&&^%', signOptions);
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, '2387JHKJH&^&&^%', verifyOptions);
    } catch (error) {
        return false;
    }
}



module.exports = {
    hashPassword,
    verifyPassword,
    generateToken,
    verifyToken
}