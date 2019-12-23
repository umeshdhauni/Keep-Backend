const Note = require('../../Modules/Note/Note-model');

const create = async (data) =>{
    return Note.create(data);
}

const findAllNotes = async (data) =>{
    return Note.find(data);
}

const findNoteById = async (id) =>{
    return Note.findById(id);
}

const updateOne = async (data) =>{
    return Note.updateOne({_id:data._id},data);
}

const deleteById = async (data) =>{
    return Note.findByIdAndDelete(data._id);
}

module.exports ={
    create,
    findAllNotes,
    updateOne,
    deleteById,
    findNoteById
}