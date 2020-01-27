const Note = require('../../Modules/Note/Note-model');

const create = async (data) =>{
    return Note.create(data);
}

const findAllNotes = async (data) =>{
    return Note.find(data).populate('assignees.user')
}

const findNoteById = async (id) =>{
    return Note.findById(id);
}

const updateOne = async (data) =>{
    console.log(data)
    return Note.findOneAndUpdate({_id:data._id},data);
}

const deleteById = async (data) =>{
    return Note.findByIdAndDelete(data._id);
}

const addRemoveTrash = async (id,val) =>{
    return Note.updateOne({_id:id},{trash:val});
}

const noteDone = async (note,data) =>{
    let checklist = note.checklists;
    let index = checklist.findIndex(element =>{
        return element.index == data.index;
    });
    checklist[index].done = data.done;
    return Note.updateOne({_id:note._id},{checklists:checklist});
}

const findSharedNotes = async (user) =>{
    return Note.find({'assignees.user':user}).populate('assignees.user')
}

module.exports ={
    create,
    findAllNotes,
    updateOne,
    deleteById,
    findNoteById,
    addRemoveTrash,
    noteDone,
    findSharedNotes
}