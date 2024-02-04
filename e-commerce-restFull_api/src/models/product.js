const mongoose = require('mongoose')
const validator = require('validator')
// in student.js file we define the Schema and the model ie; collection 
const productSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
        
    },
    description: {
        type: String,
         
    },
   
    price: {
        type: Number,
        required: true
    },
    
    quantity: {
    type: Number,
    
    },

    variants: [{
        name: String,
        SKU: String,
        additionalCost: Number,
        stockCount: Number
      }]

})

// creating model or collection/table using schema

const Product = new mongoose.model('Product',productSchema)

module.exports = Product;