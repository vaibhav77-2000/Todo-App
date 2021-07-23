//setting up the express server 
const express = require('express');
const path = require('path');
const app = express();
const port = 3300;

//configure the database
const db=require('./config/mongoose');
const Task = require('./models/task'); 

//setup the view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded()); //middleware

//setup the static files
app.use(express.static("assets"));

//Routes and Controller for fetching the data from database
app.get('/',function(req,res)
{
    Task.find({},function(err,tasks)
    {
        if (err)
        {
            console.log('Error while fetching tasks from the database');
            return;
        }
       return res.render('home',
      {
          task_list:tasks
      });
});
});

//rotes and controller for creating a task
app.post('/add-task',function(req,res)
{
    Task.create({
        que1: req.body.que1,
        que2: req.body.que2,
        que3: req.body.que3
    }, function(err, newTask){
        if(err)
        {
            console.log('Error in creating a Task!')
            return;
        }
            console.log('******',Task);
            return res.redirect('back');
    });
});

//rotes and controller for deleting a task 
app.post('/delete-task',function(req,res)
{
    var removeTask=req.body.check;
    Task.findByIdAndDelete(removeTask,function(err)
    {
        if(err)
        {
            console.log(err);
            return;
        }
        return res.redirect('back');
    });
 });

//up and run and print the messgae
app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error on serving the error:${err}`);
    }
    console.log(`Congrats!! Sever is up and running on port:${port}`);
});