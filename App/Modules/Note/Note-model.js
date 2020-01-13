const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    note: {
        type: String,
    },
    // type: {
    //     required: true,
    //     type: String,
    // },
    checklists: [
        {
            name: String,
            done: Boolean,
            index: Number
        },
    ],
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    link: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Users',
        required: true
    },
    assignees: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Users',
            },
            permission: {
                type: Array
            },
            accepted: Boolean
        }
    ],
    trash: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    },
    label: {
        type: String
    },

}, { timestamps: true });

module.exports = mongoose.model('Notes', noteSchema);
