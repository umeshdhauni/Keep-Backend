const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../Handlers/ErrorHandler');
const { login, signup } = require('./User-controller')

router.post('/login', catchErrors(login));

router.post('/signup', catchErrors(signup));

router.get('/', catchErrors(signup));


module.exports = router;