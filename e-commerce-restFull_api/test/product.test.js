const mongoose = require('mongoose');
const Product = require('../src/models/product');

beforeAll(async () => {
  // Connect to a test database
  mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_products_db")
    .then(()=>{
        console.log('Db connected')
    
    })
    .catch((err)=>{
        console.log('db connection fail '+ err);
    })
});

afterAll(async () => {
  // Disconnect from the test database
  await mongoose.connection.close();
});

describe('Product Model', () => {
  it('should save a product', async () => {
    const productData = {
      name: 'Test laptop',
      description: 'Test laptop for TDD',
      price: 999,
      variants: [
        { name: 'Test Variant', SKU: 'TEST123', additionalCost: 50, stockCount: 10 }
      ]
    };

    const product = new Product(productData);
    const savedProduct = await product.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe(productData.name);
    expect(savedProduct.variants.length).toBe(1);
  });

  // Add more model tests as needed
});
