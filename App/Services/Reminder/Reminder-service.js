const Reminder = require('../../Modules/Reminder/Reminder-model');

const create = (data) => {
    return Reminder.create(data);
}

const findAllReminders = (data) => {
    return Reminder.aggregate([
        {
            $match:{user:data.user}
        },
        {
            $group: {
                _id: '$date',
                reminders: {$push: '$$ROOT'}
            }
        }, 
        {
            $project: {
                date: '$_id',
                _id: 0,
                reminders: 1,
            }
        }
        
    ])
}

const findReminderById =  (id) => {
    return Reminder.findById(id);
}

const updateOne = (data) => {
    return Reminder.updateOne({ _id: data._id }, data);
}

const deleteById =(data) => {
    return Reminder.findByIdAndDelete(data._id);
}


module.exports = {
    create,
    findAllReminders,
    findReminderById,
    updateOne,
    deleteById
}