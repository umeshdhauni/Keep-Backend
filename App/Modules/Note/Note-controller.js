const {  findNoteById,create,findAllNotes,updateOne,deleteById,addRemoveTrash,noteDone } = require('../../Services/Note/Note-service');
const { Success, Created } = require('../../Helpers/Response/Success');
const { BadRequest,NotFound } = require('../../Helpers/Response/ClientErrors');
const { badRequest } = require('../../Helpers/Data-Format/Format');

const {fileUpload} = require('../../Helpers/Aws/file-upload')

const createNote = async (req, res) => {
    let data = { ...req.body };
    if(badRequest(['title'],data)){
        return BadRequest(res,'Missing Data');
    }

    let isUpload = await fileUpload(req.file);
    console.log(isUpload)
    data.image = isUpload.Location;
    data.user = req.user._id;
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
    let data = { ...req.params };
    
    let note = await findNoteById(data._id);
    if(!note){
        return NotFound(res,'Note not found');
    }

    await deleteById(data);
    return Success(res, 'Note is deleted successfully', null);
}

const trash = async (req, res) => {
    let data = { ...req.params,...req.body };
    
    let note = await findNoteById(data._id);
    if(!note){
        return NotFound(res,'Note not found');
    }

    await addRemoveTrash(data._id,data.trash);
    return Success(res, 'Note is deleted successfully', null);
}


const checklist = async (req, res) => {
    let data = { ...req.params,...req.body };
    
    let note = await findNoteById(data._id);
    if(!note){
        return NotFound(res,'Note not found');
    }

    await noteDone(note,data);
    return Success(res, 'Checklist is changed successfully', null);
}


module.exports = { createNote, getNotes,updateNote, deleteNote,trash,checklist }