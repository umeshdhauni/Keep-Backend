const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../Handlers/ErrorHandler');
const { createNote,getNotes } = require('./Sticky-controller')

router.post('/create', catchErrors(createNote));

router.get('/', catchErrors(getNotes));


module.exports = router;