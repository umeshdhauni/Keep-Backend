const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    note: {
        required: true,
        type: String,
    },
    type: {
        required: true,
        type: String,
    },
    checklists: [
        {
            name:String,
            done:Boolean
        },
    ],
    image: {
        type: String,
    },
    link: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Users',
        required:true
    },

},{timestamps:true});

module.exports = mongoose.model('Notes', noteSchema);
