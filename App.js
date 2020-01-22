const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


//user routes

const userRoutes = require('./App/Modules/User/User-route');
app.use('/api/user', userRoutes);

//note routes

const noteRoutes = require('./App/Modules/Note/Note-route');
app.use('/api/note', noteRoutes);

//reminder

const reminderRoutes = require('./App/Modules/Reminder/Reminder-route');
app.use('/api/reminder', reminderRoutes);

app.use((req, res, next) => {
    const error = new Error('The page you are looking for not found');
    error.status = 404;
    next(error);
});

app.use('', (req,res,next) =>{
    res.status(200).json({
        message: "Welcome Developer.",
    });
});



module.exports = app;
