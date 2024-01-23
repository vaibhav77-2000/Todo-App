//require the liabrary
const mongoose = require('mongoose');
//create a Schema
const taskSchema = new mongoose.Schema({
    que1:{
        type:String,
        required:true
    },
    que2:{
        type:String,
        required:true
    },
    que3:{
        type:Date,
        required:true
    }
});
const Task = mongoose.model('TASK',taskSchema);
//export the module
module.exports=Task;  