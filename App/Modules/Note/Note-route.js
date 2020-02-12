const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../Handlers/ErrorHandler');
const { createNote, getNotes, updateNote, deleteNote, trash, checklist, sharedNotes } = require('./Note-controller')
const { authenticate } = require('../../Middlewares/Authenticate');
const multer = require('multer');

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now());
    }
});

var upload = multer({
    storage: Storage
})
    // .array("image", 3);            ---Field name and max count
    .single('image')

router.post('/create', authenticate, upload, catchErrors(createNote));

router.get('/', authenticate, catchErrors(getNotes));

router.get('/shared', authenticate, catchErrors(sharedNotes));

router.patch('/update/:_id', authenticate, upload, catchErrors(updateNote));

router.delete('/delete/:_id', authenticate, catchErrors(deleteNote));

router.patch('/trash/:_id', authenticate, catchErrors(trash));

router.patch('/checklist/:_id', authenticate, catchErrors(checklist));


module.exports = router;