# Project Setup and Usage

# Prerequisites
Ensure that you have Node.js installed on your system. If not, you can download it from Node.js official website.

# Getting Started
Option 1: Download and Extract
Download the project from the GitHub repository.

Extract the downloaded zip file to your desired location.

Open the project folder in your preferred code editor, such as Visual Studio Code.

Option 2: Clone the Repository
# Clone the repository
=> git clone https://github.com/Aakash5209/e-commerce-REST-API.git

# Navigate to the project directory
=> cd your-repository/src

# Install Dependencies
Inside the src folder, install project dependencies
=> npm install

# Run the Project
Ensure you are in the src folder, then run the project
=> node app.js

# API Endpoints:-
The API will be available at http://localhost:5000/

# Create a New Product
POST /products
Create a new product by providing the necessary details in the request body.

# Get All Products
GET /products
Retrieve a list of all products.

# Get a Single Product by ID
GET /products/:id
Retrieve a specific product by providing its ID in the URL.

# Search Products
GET /products/search/:term
Search for products by name, description, or variant name.

# Update a Product
PATCH /products/:id
Update an existing product by providing its ID in the URL and the fields to be updated in the request body.

# Delete a Product
DELETE /products/:id
Delete a product by providing its ID in the URL.

# Create a New Variant for a Product
POST /products/:productId/variants
Create a new variant for a product by providing the product ID in the URL and the variant details in the request body.

# Update a Variant within a Product
PUT /products/:productId/variants/:variantId
Update a variant within a product by providing both the product ID and variant ID in the URL, along with the updated details in the request body.


# Delete a Variant within a Product
DELETE /products/:productId/variants/:variantId
Delete a variant within a product by providing both the product ID and variant ID in the URL.

# Testing
To run tests, ensure you are inside the test folder and execute the following command:

# Run tests
npm test
