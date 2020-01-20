const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    type: {
        required: true,
        type: String,
        default:'event'
    },
    description: {
        type: String,
    },
    repeat: {
        required: true,
        type: String,
    },
    date:{
        required:true,
        type:Date
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Users',
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Reminders', reminderSchema);
