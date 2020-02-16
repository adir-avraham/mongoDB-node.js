  
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require('cors');
//routes

const usersRoute = require('./routes/users');

app.use(cors());
app.use(bodyParser.json());

app.use('/users', usersRoute);



mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Connected to DB")
});




app.listen(process.env.PORT, (err) =>{
    if (err) return console.log(err);
    console.log(`Api is listening to port: ${process.env.PORT}`);
});