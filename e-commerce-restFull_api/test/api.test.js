const request = require('supertest');
const app = require('../src/app.js'); 

describe('/products', () => {
  it('should create a new product', async () => {
    const productData = {
      name: 'Test smartphone',
      description: 'Test smartphone for TDD',
      price: 799,
      variants: [
        { name: 'Test Variant', SKU: 'TEST456', additionalCost: 30, stockCount: 20 }
      ]
    };

    const response = await request(app)
      .post('/products')
      .send(productData);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe(productData.name);
  },1000);

 
  
});
