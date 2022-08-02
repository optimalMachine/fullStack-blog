const express = require('express');
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');
const UserModel = require('./models/Users')
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:YH0XlYv8aAxcQ8ti@cluster0.lo1xk.mongodb.net/mern-tutorial?retryWrites=true&w=majority');

app.get('/getUsers',(req,res)=>{
    UserModel.find({}, (err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

app.post('/createUser', async (req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

app.listen(PORT,()=>{
    console.log(`Server runs perfectly on ${PORT}`);
});



