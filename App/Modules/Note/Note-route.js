const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../Handlers/ErrorHandler');
const { createNote,getNotes,updateNote,deleteNote } = require('./Note-controller')

router.post('/create', catchErrors(createNote));

router.get('/', catchErrors(getNotes));

router.patch('/update/:_id', catchErrors(updateNote));

router.delete('/delete/:_id', catchErrors(deleteNote));


module.exports = router;