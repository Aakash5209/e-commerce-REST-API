const mongoose = require('mongoose')

const dbconnect = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_products_db")
    .then(()=>{
        console.log('Db connected')
    
    })
    .catch((err)=>{
        console.log('db connection fail '+ err);
    })
    
    }
    
module.exports = dbconnect;