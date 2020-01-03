const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../Handlers/ErrorHandler');
const { createNote,getNotes,updateNote,deleteNote } = require('./Note-controller')

router.post('/create', authenticate, catchErrors(createNote));

router.get('/', authenticate, catchErrors(getNotes));

router.patch('/update/:_id', authenticate, catchErrors(updateNote));

router.delete('/delete/:_id', authenticate, catchErrors(deleteNote));


module.exports = router;