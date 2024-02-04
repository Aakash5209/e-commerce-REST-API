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
# Postman Collection Link: [ https://go.postman.co/workspace/e186cd22-0fbb-4592-85ad-df2bb65ee032/collection/31759053-3bc6b748-3549-44d0-b531-d0981d2bcc5c ]
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

# Usage:
Create, Read, Update, Delete (CRUD) Operations for Products:

# Create Product:
Users can add new products to the e-commerce system by making a POST request to the /products endpoint. This involves providing details such as name, description, price, and variants.

# Read All Products:
Users can retrieve a list of all products by making a GET request to the /products endpoint.

# Read Single Product:
Users can retrieve details of a specific product by making a GET request to the /products/:id endpoint, where :id is the unique identifier of the product.

# Update Product:
Users can update the details of a product by making a PATCH request to the /products/:id endpoint, providing the product ID and the fields to be updated.

# Delete Product:
Users can delete a product by making a DELETE request to the /products/:id endpoint, where :id is the unique identifier of the product.

# Search Functionality:
Users can search for products based on the product name, description, or variant name by making a GET request to the /products/search/:term endpoint. The :term parameter is used for the search query.
CRUD Operations for Product Variants:

# Create Variant:
Users can add new variants to an existing product by making a POST request to the /products/:productId/variants endpoint, where :productId is the unique identifier of the product. Variant details such as name, SKU, additional cost, and stock count are provided in the request body.
# Update Variant: 
Users can update the details of a variant within a product by making a PUT request to the /products/:productId/variants/:variantId endpoint, providing both the product ID and variant ID in the URL, along with the updated details in the request body.
# Delete Variant: 
Users can delete a variant within a product by making a DELETE request to the /products/:productId/variants/:variantId endpoint, where :productId is the unique identifier of the product and :variantId is the unique identifier of the variant.

Overall, this API serves as the backend for managing products and their variants in an e-commerce system, providing essential functionality for creating, retrieving, updating, and deleting data. The search functionality enhances the user experience by enabling efficient product discovery based on search queries. Developers can run tests to ensure the reliability of the implemented features.
