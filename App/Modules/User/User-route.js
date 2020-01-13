const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../Handlers/ErrorHandler');
const { login, signup, getUser, updateLabel, getUserByMail } = require('./User-controller');
const { authenticate } = require('../../Middlewares/Authenticate')

router.post('/login', catchErrors(login));

router.post('/signup', catchErrors(signup));

router.get('/', authenticate, catchErrors(getUser));

router.get('/getByEmail', authenticate, catchErrors(getUserByMail));

router.patch('/update-label', authenticate, catchErrors(updateLabel));


module.exports = router;