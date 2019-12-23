const mongoose = require('mongoose');

const stickySchema = new mongoose.Schema({
    
    note: {
        required: true,
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Users',
        required:true
    },

},{timestamps:true});

module.exports = mongoose.model('Sticky', stickySchema);
