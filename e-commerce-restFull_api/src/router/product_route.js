const express = require('express')

const Product = require('../models/product.js')

const app = express()

//create a router by using the express.Router() method:
const router = express.Router()

//using inbuilt middleware bcz express cant understand if postman send the data in json format
app.use(express.json());

//Define routes on the router object   REPLACE { app <==> router }
// creating a new Product or saving the inform of the new studnet
router.post('/products',async(req,res)=>{

    //creating documnet or new Product here we get data from postman 
    try{
    const product = new Product(req.body);
    const result = await product.save();
    res.status(201).send(result)
    }
    catch(err){
        res.status(400).send(err);
    }
})

// get the data from the db
// different method{http verbs} can have same endpoint while same method cant have same endpoint
router.get('/products', async(req,res)=>{
    try{
        const result = await Product.find();
        res.status(200).send(result)
    }
    catch(err){
        res.status(400).send("page not found")
    }
})


// get only single Products by targeting product id
router.get('/products/:id',async(req,res)=>{
    try{
        // it will give object which consist id and its value
        // const _idObj = req.params;
        const _id = req.params.id; 
        // it will give value of id 
        const result = await Product.findById(_id)
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send("id not exist in db");
    }
})

 // Search products
router.get('/products/search/:term', async (req, res) => {
    try {
      const term = req.params.term; 
      console.log(term)
      const results = await Product.find({
        $or: [
          { name: { $regex: term, $options: 'i' } },
          { description: { $regex: term, $options: 'i' } },
          { 'variants.name': { $regex: term, $options: 'i' } },
        ],
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// update the existing Product data from db for that we can use put and patch http verbs or method
router.patch('/products/:id',async (req,res)=>{
   
    try{
        const _id = req.params.id;
        const updateField = req.body;
       
        // const result = await findByIdAndUpdate(_id,updateField,{new: true})   if u wroite this then it will giveu error and not update bcz querry (findByIdAndUpdate,findMany,delete..etc) are always apply to the collection/table or document 
        const updated = await Product.findByIdAndUpdate(_id,updateField,{new:true});
        // console.log(updated)
       res.send(updated)
    }
    catch(err){
        res.status(500).send(err)
    }
})
//when we use findByIdAndDelete() or findByIdAndDelete() then we pass only arggument as a variable bt when we use find() only then we pass the  querry {   }

router.delete('/products/:id',async (req,res)=>{
    try{
        const ProductId = req.params.id;
        const result = await Product.findByIdAndDelete(ProductId)
        if(!ProductId){
            res.status(400).send("id not valid")
        }
        res.send(result)
    }
    catch(err){
        res.status(500).send(err)
    }
})
// CRUD operation on product variant

// Create a new variant for a product
router.post('/products/:productId/variants', async (req, res) => {
    try {
        const productId = req.params.productId;
        const { name, SKU, additionalCost, stockCount } = req.body;

        // Find the product by ID
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Create a new variant
        const newVariant = {
            name,
            SKU,
            additionalCost,
            stockCount
        };

        // Add the variant to the product's variants array
        product.variants.push(newVariant);

        // Save the updated product
        const savedProduct = await product.save();

        res.status(201).json(savedProduct.variants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// Update a variant within a product
router.put('/products/:productId/variants/:variantId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const variantId = req.params.variantId;
        const { name, SKU, additionalCost, stockCount } = req.body;

        // Find the product by ID
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Find the variant within the product's variants array
        const variantToUpdate = product.variants.find(variant => variant._id == variantId);

        if (!variantToUpdate) {
            return res.status(404).json({ error: 'Variant not found' });
        }

        // Update the variant properties
        variantToUpdate.name = name;
        variantToUpdate.SKU = SKU;
        variantToUpdate.additionalCost = additionalCost;
        variantToUpdate.stockCount = stockCount;

        // Save the updated product
        const savedProduct = await product.save();

        res.status(200).json(savedProduct.variants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a variant within a product
router.delete('/products/:productId/variants/:variantId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const variantId = req.params.variantId;

        // Find the product by ID
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Filter out the variant to be deleted
        product.variants = product.variants.filter(variant => variant._id != variantId);

        // Save the updated product
        const savedProduct = await product.save();

        res.status(200).json(savedProduct.variants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;