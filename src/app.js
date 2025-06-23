const express = require('express');
const app = express();


app.use('/hello',(req,res)=>{
    res.send('Hello from the hello page');
})


app.get('/user',(req,res)=>{
    res.send('Get calls for users')
})
app.post('/user',(req,res)=>{
    res.send('Created user')
})
app.delete('/user',(req,res)=>{
    res.send('Deleted user')
})
app.use('/',(req,res)=>{
    res.send('Hello from the dashboard');
})

app.listen(3000,()=>{
    console.log('server is running at port 3000');
})