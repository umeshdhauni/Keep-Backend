const Sticky = require('../../Modules/Sticky/Sticky-model');

const create = async (data) =>{
    return Sticky.create(data);
}

const findAllNotes = async (data) =>{
    return Sticky.find(data);
}

const findNoteById = async (id) =>{
    return Sticky.findById(id);
}

const updateOne = async (data) =>{
    return Sticky.updateOne({_id:data._id},data);
}

const deleteById = async (data) =>{
    return Sticky.findByIdAndDelete(data._id);
}


module.exports ={
    create,
    findAllNotes,
    findNoteById,
    updateOne,
    deleteById
}