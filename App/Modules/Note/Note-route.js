const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../Handlers/ErrorHandler');
const { createNote,getNotes,updateNote,deleteNote,trash,checklist } = require('./Note-controller')
const {authenticate} = require('../../Middlewares/Authenticate')

router.post('/create', authenticate, catchErrors(createNote));

router.get('/', authenticate, catchErrors(getNotes));

router.patch('/update/:_id', authenticate, catchErrors(updateNote));

router.delete('/delete/:_id', authenticate, catchErrors(deleteNote));

router.patch('/trash/:_id', authenticate, catchErrors(trash));

router.patch('/checklist/:_id', authenticate, catchErrors(checklist));


module.exports = router;