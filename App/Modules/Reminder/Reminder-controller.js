const { findReminderById, create,findAllReminders,updateOne,deleteById } = require('../../Services/Reminder/Reminder-service');
const { Success, Created } = require('../../Helpers/Response/Success');
const { BadRequest } = require('../../Helpers/Response/ClientErrors');
const { isBadRequest } = require('../../Helpers/Data-Format/Format')

const createReminder = async (req, res) => {
    let data = { ...req.body };
    if(isBadRequest(['name','type','repeat','date'],data)){
        return BadRequest(res,'Missing Data');
    }
    data.user = req.user._id;
    let record = await create(data);
    return Created(res, 'Reminder is created successfully', record);
}

const getReminders = async (req,res) =>{
    let data = { ...req.query };
    data.user = req.user._id;
    let reminders = await findAllReminders(data);
    return Success(res,'All reminders',reminders);
}


const updateReminder = async (req,res) =>{
    let data = { ...req.body,...req.params };
    
    let reminder = await findReminderById(data._id);
    if(!reminder){
        return NotFound(res,'Reminder not found');
    }
    let record = await updateOne(data);
    return Success(res, 'Reminder is updated successfully', record);
}


const deleteReminder = async (req, res) => {
    let data = { ...req.params };
    let reminder = await findReminderById(data._id);
    if(!reminder){
        return NotFound(res,'Reminder not found');
    }

    await deleteById(data);
    return Success(res, 'Reminder is deleted successfully', null);
}


module.exports = { createReminder, updateReminder,deleteReminder, getReminders}