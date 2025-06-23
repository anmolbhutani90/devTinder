const express = require('express');
const app = express();


app.get('/hello',(req,res)=>{
    res.send('Hello from the hello page');
})
app.get('/',(req,res)=>{
    res.send('Hello from the dashboard');
})


app.listen(3000,()=>{
    console.log('server is running at port 3000');
})