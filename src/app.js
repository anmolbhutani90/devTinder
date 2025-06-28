const express = require('express');
const app = express();
const {connectDB} = require('../config/database');
const User = require('../models/user');


//middleware to parse json req body and convert it into js obj
app.use(express.json())

//signup post 
app.post('/signup', async (req,res)=>{
    //creating a instance of User model data
    const user = new User(req.body);
    await user.save();
    try{
        res.send("User created successfully");
    }
    catch(err){
        res.status(400).send("Something went wrong")
    }
})


connectDB()
.then(()=>{
    console.log('db connected successfully');
    app.listen(7777,()=>{
        console.log('server started successfully')
    })
})
.catch((err)=>{
    console.log('db not connected successfully')
})

