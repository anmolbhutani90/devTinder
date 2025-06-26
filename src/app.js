const express = require('express');
const app = express();


app.use('/hello',(req,res)=>{
    res.send('Hello from the hello page');
})

// app.get('/ab*c',(req,res)=>{
//     res.send('abc worked');
// })
// app.get('/a(bc)?d', (req, res) => {
//   res.send('abcd or ad worked');
// });
// app.get('/a(b)+c', (req, res) => {
//   res.send('abbbbbc worked');
// });
// app.get(/a.*/, (req, res) => {
//   res.send(`Matched /a route: ${req.url}`);
// });
// app.get(/.*fly$/, (req, res) => {
//   res.send(`ends with fly`);
// });

// app.get('/user/:userId/:uuid',(req,res)=>{
//     const {userId,uuid} = req.params;
//     console.log('userid,uuid',userId,uuid)
//     res.send('Get calls for users')
// })
app.get('/user',(req,res)=>{
    const {userId} = req.query;
    console.log('userid',userId)
    res.send('Get calls for users')
})
// app.post('/user',(req,res)=>{
//     res.send('Created user')
// })
// app.delete('/user',(req,res)=>{
//     res.send('Deleted user')
// })
// app.use('/',(req,res)=>{
//     res.send('Hello from the dashboard');
// })

app.listen(3000,()=>{
    console.log('server is running at port 3000');
})