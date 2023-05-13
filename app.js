const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');

const app=express();

app.use(bodyParser.json());

//Import routes
const postRoute=require('./routes/posts');

app.use('/posts',postRoute);  

//listeinng to server
app.listen(3000);



 //Connect to DB
 mongoose.connect(process.env.DB_Connection, {useNewUrlParser: true, useUnifiedTopology: true } )
 .then(() => console.log('Connected Successfully with teh DB'))
 .catch((err) => { console.error(err); });