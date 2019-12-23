const {  findNoteById,create,findAllNotes,updateOne,deleteById } = require('../../Services/Note/Note-service');
const { Success, Created } = require('../../Helpers/Response/Success');
const { BadRequest, Unauthorized, Conflic,NotFound } = require('../../Helpers/Response/ClientErrors');
const { badRequest } = require('../../Helpers/Data-Format/Format')

const createNote = async (req, res) => {
    let data = { ...req.body };
    if(badRequest(['note','user','type'],data)){
        return BadRequest(res,'Missing Data');
    }
    let record = await create(data);
    return Created(res, 'Note is created successfully', record);
}

const getNotes = async (req, res) => {
    let data = { ...req.query };
    
    let notes = await findAllNotes(data);
    return Success(res,'All notes',notes);
}

const updateNote = async (req, res) => {
    let data = { ...req.body,...req.params };

    let note = await findNoteById(data._id);
    if(!note){
        return NotFound(res,'Note not found');
    }

    let record = await updateOne(data);
    return Success(res, 'Note is updated successfully', record);
}


const deleteNote = async (req, res) => {
    let data = { ...req.body };
    
    let note = await findNoteById(data._id);
    if(!note){
        return NotFound(res,'Note not found');
    }

    await deleteById(data);
    return Success(res, 'Note is deleted successfully', null);
}


module.exports = { createNote, getNotes,updateNote, deleteNote }