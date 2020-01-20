const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../Handlers/ErrorHandler');
const { createReminder, updateReminder, deleteReminder, getReminders } = require('./Reminder-controller');
const { authenticate } = require('../../Middlewares/Authenticate')

router.post('/create', catchErrors(createReminder));

router.get('/', authenticate, catchErrors(getReminders));

router.delete('/delete/:_id', authenticate, catchErrors(deleteReminder));

router.patch('/update/:_id', authenticate, catchErrors(updateReminder));


module.exports = router;