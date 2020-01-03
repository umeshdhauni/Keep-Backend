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
    video: {
        type: String,
    },
    link: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Users',
        required:true
    },
    assignees:[
        {
           user:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Users', 
           },
           permission:{
               type:String
           }
        }
    ],
    trash:{
        type:Boolean,
        default:false
    },
    dueDate:{
        type:Date
    },
    label:{
        type:String
    }

},{timestamps:true});

module.exports = mongoose.model('Notes', noteSchema);
