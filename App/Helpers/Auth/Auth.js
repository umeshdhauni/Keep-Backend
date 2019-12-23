const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hashPassword = async function(password) {
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) reject(err)
            resolve(hash)
        });
    });

    // Return hashed password
    return hashedPassword
}


const verifyPassword = async function(password, hash) {
    const verifyPassword = await new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });

    return verifyPassword;
}



module.exports = { hashPassword, verifyPassword}