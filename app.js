const express = require('express');
const mongoose = require('mongoose'); 
const accountRoutes = require('./routes/account'); 
const cardRoutes = require('./routes/card'); 
const bodyParser = require('body-parser')
const cors= require('cors');

require('dotenv/config');

const app = express() ; 


//middleware 
app.use(bodyParser.json());
app.use(cors());
app.use('/account',accountRoutes) ; 
app.use('/card',cardRoutes) ; 







//Connect to  db 

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true},()=> {
    console.log('Connect to DB !!'); 
})



//port listening 
app.listen(3000); 