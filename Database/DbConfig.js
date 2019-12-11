const mongoose = require('mongoose');

exports.connect = () => {

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true)
    let uri = "mongodb://localhost:27017/keep"

    // if (process.env.NODE_ENV == "aws") uri = "mongodb://common_access:coke@127.0.0.1:27017/keep"

    mongoose.connect(uri);

    mongoose.connection.on('connected', () => {
        console.log(`--- 🔥 Connected to ${process.env.NODE_ENV || "Development"} database 🔥 ---`);
    });
    mongoose.connection.on('error', (err) => {
        console.error(`--- 🚫❌ Error Occured While Connecting to ${process.env.NODE_ENV} Database ❌🚫 ---`);
    });
    mongoose.connection.on('disconnect', () => {
        console.log(`--- ☄️ Disconnected From ${process.env.NODE_ENV} Database ☄️ ---`)
    });
}


exports.disconnect = function () {
    mongoose.disconnect((err) => {
        console.error(`--- 🚫❌ Error Occured While Disconnecting from ${process.env.NODE_ENV} Database ❌🚫 ---`);
    })
}
