const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true
    },
    phone: {
        required: true,
        type: String,
        unique: true,
        trim: true
    },
    password: {
        required: true,
        type: String,
        trim: true
    },
    refreshToken: {
        type: String,
        // required:true
    },
    labels: {
        type: Array,
        default:['#c5fdd9','#ffc','#ccf','#fcc']
      }

}, { timestamps: true });

module.exports = mongoose.model('Users', userSchema);
