const Note = require('../../Modules/Note/Note-model');

const create = (data) => {
    return Note.create(data);
}

const findAllNotes = (data) => {
    return Note.find(data).populate('assignees.user')
}

const findNoteById = (id) => {
    return Note.findById(id);
}

const updateOne = (data) => {
    return Note.findOneAndUpdate({ _id: data._id }, data);
}

const deleteById = (data) => {
    return Note.findByIdAndDelete(data._id);
}

const addRemoveTrash = (id, val) => {
    return Note.updateOne({ _id: id }, { trash: val });
}

const noteDone = (note, data) => {
    let checklist = note.checklists;
    let index = checklist.findIndex(element => {
        return element.index == data.index;
    });
    checklist[index].done = data.done;
    return Note.updateOne({ _id: note._id }, { checklists: checklist });
}

const findSharedNotes = (user) => {
    return Note.find({ 'assignees.user': user }).populate('assignees.user')
}

module.exports = {
    create,
    findAllNotes,
    updateOne,
    deleteById,
    findNoteById,
    addRemoveTrash,
    noteDone,
    findSharedNotes
}