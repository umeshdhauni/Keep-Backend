module.exports = {
    signOptions: {
        issuer: 'keep',
        subject: 'Auth Token',
        audience: 'keep.io',
        algorithm: "RS256",
        expiresIn: '24h'
    },
    verifyOptions: {
        issuer: 'keep',
        subject: 'Auth Token',
        audience: 'keep.io',
        algorithm: ["RS256"],
        expiresIn: '24h'
    }
}