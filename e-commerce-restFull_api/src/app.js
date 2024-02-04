const express = require('express');
const mongoose =require('mongoose')
const dbconnect = require('./database/connection.js')
// const Product = require('./models/product.js')
const router = require('./router/product_route.js')
const app = express()
//connect with DB
dbconnect();

const port = process.env.PORT || 5000;

//using inbuilt middleware bcz express cant understand if postman send the data in json format
// here we are also telling to the express that what we are going to us in our express app
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log('listening')
})

module.exports = app;